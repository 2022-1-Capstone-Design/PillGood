const { encode } = require("punycode");
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
        let result = new Object( );
        for (elements of req.body.surveyAnswer) {
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
                    result[question[0].main_category][question[0].sub_category.name] === undefined ? result[question[0].main_category][question[0].sub_category.name] = [] : result[question[0].main_category][question[0].sub_category.name].push(score[0].score); 
                }
            }
        } 
        const spawn = require("child_process").spawn;
        const python = spawn('python', ['example.py', JSON.stringify(result)])
        python.stdout.on('data', (data) => {
            let buff = Buffer.from(data, 'base64');
            let text = buff.toString('utf-8');
            const list = eval(text);
            console.log(test);
            
        });
    } catch(error) {
        console.error(error)
        return res.status(500).json(error);
    }
}

module.exports = {
    getQuestion,
    getResult
};