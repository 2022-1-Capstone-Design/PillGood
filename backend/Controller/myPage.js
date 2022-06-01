const User = require("../Schemas/user");
const Result = require("../Schemas/result");
const Like = require("../Schemas/like");

const { ObjectId } = require("mongodb");

const getUserPage = async (req, res) => {
    try {
        const id = req.user;
        if (!id) throw new Error("no user");
        const user = await User.findOne({ id });
        const likes = await Like.aggregate([
            { '$match': { 'user_id': id } }, 
            {
              '$lookup': {
                'from': 'products', 
                'localField': 'product_id', 
                'foreignField': '_id', 
                'as': 'product'
              }
            }, { '$unwind': '$product' }, 
            { $sort : { 'product.INDEX': 1 } }, 
            {
              '$group': {
                '_id': new ObjectId( ), 
                'products': {
                  '$push': '$product'
                }
              }
            }
        ]);
        const results = await Result.aggregate([
            { '$match': { 'kakao_id': id } }, 
            {
              '$group': {
                '_id': '$_id', 
                'user_name': { '$first': '$user_name' }, 
                'age': { '$first': '$age' }, 
                'user_date': { '$first': '$user_date' }, 
                'result': { '$push': '$result.category_name' }
              }
            }, { '$unwind': '$result' }, 
            { '$sort': { 'user_date': -1 } },
            { '$project': {
              _id: 1,
              user_name: 1,
              age: 1,
              user_date: { $dateToString: { format: "%Y-%m-%d %H:%M", date: "$user_date" } },
              result: 1
            } }

        ]);
        return res.status(200).json({
            name: user.name,
            likes: likes[0] ? likes[0].products : null,
            results
        })
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
}

module.exports = {
    getUserPage,
}