const express = require("express");
const router = express.Router();

const Login = require("../Controller/login");

router.post("/kakao", Login.login);
router.post("/kakao/logout", Login.logout);

module.exports = router;
