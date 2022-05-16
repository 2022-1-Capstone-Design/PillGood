const express = require("express");
const router = express.Router();

const Product = require("../Controller/product");

router.get("/", Product.getProduct); 

module.exports = router;
