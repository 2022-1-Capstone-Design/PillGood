const Question = require("../Schemas/question");
const Score =  require("../Schemas/score");
const Result = require("../Schemas/result");
const ObjectId = require("mongodb").ObjectId;

const getQuestion = async (req, res) => {
  try {
    const question = await Question.find();
    return res.status(200).json(question);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const insertResult = async (input, id, name, age) => {
    try {
        input = JSON.parse(input);
        const keys = Object.keys(input);
        const insert = {
            kakao_id: id,
            user_name: name,
            age: age,
            BMI: {
                bmi_figure: input.BMI[0],
                bmi_result: input.BMI[1]
            },
            result: new Array( )
        }
        for (let key of keys.slice(0,-1)) {
            insert.result.push({
                category_name: key,
                product: input[key].slice(0, 3),
                food: input[key].slice(3, 6),
                nutrient: input[key].slice(6, 9)
            });
        }
        return await Result.create(insert);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
}

const getResult = async (req, res) => {
    try {
        const surveyAnswer = req.body.surveyAnswer;
        const user = req.user;
        if (!user) throw new Error("no user");
        let result = {
            height: surveyAnswer[0][1],
            weight: surveyAnswer[0][2],
            age: surveyAnswer[0][3]
        };
        for (let element of surveyAnswer[1]) {
            const question = await Question.aggregate([
                {
                    $unwind: {
                        path: "$sub_category",
                    },
                },
                {
                    $unwind: {
                        path: "$sub_category.question",
                    },
                },
                {
                    $match: {
                    "sub_category.question._id": new ObjectId(element),
                    },
                },
            ]);
            const score = await Score.aggregate([
                {
                    $match: {
                    ref: new ObjectId(element),
                    },
                }, 
            ]);
            const main_category = question[0].main_category;
            const sub_category = question[0].sub_category.name;
            if (!result[main_category]) result[main_category] = new Object( );
            if (!result[main_category][sub_category]) {
                result[main_category][sub_category] = [ ];  
             } 
             result[main_category][sub_category].push(score[0].score)
        }
        console.log(result);
        const spawn = require("child_process").spawn;
        const python = spawn("python", ["example.py", JSON.stringify(result)]);
        python.stdout.on("data", (data) => {
            let buff = Buffer.from(data, "base64");
            let text = buff.toString("utf-8");
            return insertResult(text, user, surveyAnswer[0][0], result.age).then(data => res.status(200).json({
                success: true,
                _id: data._id
            }));
        });
        python.stderr.on("data", (data)=> {
          console.error(data.toString( ));
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

const getResultDetails = async (req, res) => {
    try {
        console.log(req.params);
        const id = req.params.id;
        let result = await Result.aggregate([
            { '$match': { '_id': new ObjectId(id) } }, 
            {
              '$project': {
                '_id': 1, 
                'user_name': 1, 
                'BMI': 1, 
                'age': 1, 
                'user_date': 1
              }
            }
        ]);
        const category = await Result.aggregate([
            { '$match': { '_id': new ObjectId(id) } }, 
            { '$unwind': '$result' }, 
            { '$unwind': '$result.product' }, 
            { '$unwind': '$result.food' }, 
            {
              '$lookup': {
                'from': 'products', 
                'localField': 'result.product', 
                'foreignField': 'INDEX', 
                'as': 'product'
              }
            }, { '$unwind': '$product' }, 
            {
              '$lookup': {
                'from': 'foods', 
                'localField': 'result.food', 
                'foreignField': 'INDEX', 
                'as': 'food'
              }
            }, { '$unwind': '$food' }, 
            {
              '$group': {
                '_id': '$result.category_name', 
                'product': { '$addToSet': '$product' }, 
                'food': { '$addToSet': '$food' },
                'nutrient' : { $first: "$result.nutrient" }
              }
            }, {
              '$project': {
                '_id': 0, 
                'category': '$_id', 
                'product': 1, 
                'food': 1,
                'nutrient': 1
              }
            }
        ]);
        return res.status(200).json(result.concat(category));
    } catch (error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    getQuestion,
    getResult,
    getResultDetails
};