const express = require("express");
const router = express.Router();

const Auth = require("../Controller/auth");
const MyPage = require("../Controller/myPage");

router.get("/", Auth.verifyUser, MyPage.getUserPage); 

module.exports = router;
