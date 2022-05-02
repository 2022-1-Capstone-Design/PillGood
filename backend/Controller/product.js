const Product = require('../Schemas/product')

const getProduct = async (req, res) => {
    try {
       const products = await Product.find( ); 
       return res.status(200).json(products);
    } catch (error) {
        return res.status(500).json(error)
    } 
}

module.exports = {
    getProduct,
}