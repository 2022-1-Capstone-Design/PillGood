const Product = require('../Schemas/product');
const Like = require("../Schemas/like");

const getProduct = async (req, res) => {
    try {
        const params = req.query;
        const user = req.user;
        let products;
        if (params.search) {
            const split = params.search.split(' ');
            const arr = split.map(e => new RegExp(e))
            products = await Product.find( 
                {
                    PRDLST_NM: arr
                }
            );
        } else {
            products = await Product.find( );
        }
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
        console.log(req);
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