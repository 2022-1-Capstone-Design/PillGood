const express = require("express");
const router = express.Router();

const Survey = require("../Controller/survey");

router.get("/", Survey.getQuestion); 

module.exports = router;
