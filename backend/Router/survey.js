const express = require("express");
const router = express.Router();

const Auth  = require("../Controller/auth");
const Survey = require("../Controller/survey");

router.get("/", Survey.getQuestion)
        .post("/", Auth.verifyUser, Survey.getResult);

router.get("/:id", Survey.getResultDetails);

module.exports = router;
