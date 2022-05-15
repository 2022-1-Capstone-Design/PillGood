const Product = require('../Schemas/product');
const Like = require("../Schemas/like");

const getProduct = async (req, res) => {
    try {
        const params = req.query;
        const user = req.user;
        let products, arr;
        if (params.search) {
            const split = params.search.split(' ');
            arr = split.map(e => new RegExp(e))
        }
        const match = arr ? { '$match': { $or: [
            { PRDLST_NM: { $in: arr }},
            { BSSH_NM: { $in: arr } }
          ] } } : { $match: { } };
        products = await Product.aggregate([
            match,
            {
                '$lookup': {
                'from': 'likes', 
                'localField': '_id', 
                'foreignField': 'product_id', 
                'as': 'likes'
                }
            }, {
                '$project': {
                    'INDEX': 1, 
                    'PRDLST_NM': 1, 
                    'BSSH_NM': 1, 
                    'likes': {
                        '$filter': {
                            'input': '$likes', 
                            'as': 'like', 
                            'cond': { '$eq': [ '$$like.user_id', user ] }
                        }
                    }
                }
            }
        ]);
        return res.status(200).json(products);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    } 
};

const addLike = async (req, res) => {
    try {
        Like.findOrCreate({
            user_id: req.user,
            product_id: req.body.productId
        })
        return res.status(200).json({
            success: true
        })
    } catch(error) {
        console.error(error);
        return res.status(500).json(error);
    }
}

const deleteLike = async (req, res) => {
    try {
        await Like.deleteOne(
            {
                user_id: req.user,
                product_id: req.body.productId
            }
        );
        return res.status(200).json({
            success: true
        })
    } catch(error) {
        console.error(error);
        return res.status(500).json(error);
    }
}

module.exports = {
    getProduct,
    addLike,
    deleteLike
}