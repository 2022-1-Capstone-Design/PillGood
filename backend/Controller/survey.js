const Question = require("../Schemas/question");
const Score =  require("../Schemas/score");
const ObjectId = require("mongodb").ObjectId;

const getQuestion = async (req, res) => {
    try { 
        const question = await Question.find( );
        return res.status(200).json(question);
    } catch(error) {
        return res.status(500).json(error);
    }
}

const getResult = async (req, res) => {
    try {
<<<<<<< Updated upstream
        const answer = req.body.surveyAnswer;
        let result = {
            height: answer[1],
            weight: answer[2],
            age: answer[3]
        }
        for (elements of answer) {
            if (typeof elements === "object") {
                for (element of elements) {
                    const question = await Question.aggregate([
                        {
                          '$unwind': {
                            'path': '$sub_category'
                          }
                        }, {
                          '$unwind': {
                            'path': '$sub_category.question'
                          }
                        }, {
                          '$match': {
                            'sub_category.question._id': new ObjectId(element)
                          }
                        }
                      ]);
                     const score = await Score.aggregate([
                         {
                            '$match': {
                                 'ref':  new ObjectId(element)
                             }
                         }
                     ]);
                    if (result[question[0].main_category] === undefined) result[question[0].main_category] = new Object( );
                    if (result[question[0].main_category][question[0].sub_category.name] === undefined) result[question[0].main_category][question[0].sub_category.name] = []
                    result[question[0].main_category][question[0].sub_category.name].push(score[0].score); 
                }
            }
        } 
        console.log(result);
        const spawn = require("child_process").spawn;
        const python = spawn('python', ['example.py', JSON.stringify(result)])
        python.stdout.on('data', (data) => {
            let buff = Buffer.from(data, 'base64');
            const text = buff.toString('utf-8');
        });
        python.stdout.on('data', (data) => {
            let buff = Buffer.from(data, 'base64');
            const text = buff.toString('utf-8');
            console.log(text);
        });
        } catch(error) {
        console.error(error)
        return res.status(500).json(error);
    }
}
=======
        const surveyAnswer = req.body.surveyAnswer;
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
            console.log(text);
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};
>>>>>>> Stashed changes

module.exports = {
    getQuestion,
    getResult
};