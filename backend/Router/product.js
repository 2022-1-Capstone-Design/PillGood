const express = require("express");
const router = express.Router();

const Product = require("../Controller/product");
const Auth = require("../Controller/auth");

router.get("/", Auth.verifyUser, Product.getProduct) 
        .post("/", Auth.verifyUser, Product.addLike)
        .delete("/", Auth.verifyUser, Product.deleteLike);

module.exports = router;
