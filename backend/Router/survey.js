const express = require("express");
const router = express.Router();

const Survey = require("../Controller/survey");

router.get("/", Survey.getQuestion); 
<<<<<<< Updated upstream
router.post("/", Survey. getResult);
=======
router.post("/", Survey.getResult);
>>>>>>> Stashed changes

module.exports = router;
