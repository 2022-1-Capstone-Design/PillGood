const Product = require('../Schemas/product')
const url = require("url");

const getProduct = async (req, res) => {
    try {
        const params = url.parse(req.url, true).query;
        let products
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
        return res.status(500).json(error);
    } 
}

module.exports = {
    getProduct,
}