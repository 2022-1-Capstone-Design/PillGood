const express = require("express");
const router = express.Router();

const Auth = require("../Controller/auth");

router.post("/kakao", Auth.login);
router.post("/kakao/logout", Auth.logout);

module.exports = router;
