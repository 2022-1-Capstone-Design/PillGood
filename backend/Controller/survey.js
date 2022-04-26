const Question = require("../Schemas/question")

const getQuestion = async (req, res) => {
    try { 
        const question = await Question.find( );
        return res.status(200).json(question);
    } catch(error) {
        return res.status(500).json(error);
    }
}

module.exports = {
    getQuestion
};