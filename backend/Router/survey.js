const express = require("express");
const router = express.Router();

const Survey = require("../Controller/survey");

router.get("/", Survey.getQuestion); 

router.post("/", Survey.getResult);


module.exports = router;
