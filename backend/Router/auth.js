const express = require('express');
const router = express.Router();
const passport = require('passport');
const kakao = require("../Passport/kakaoStrategy");

router.get('/kakao', passport.authenticate('kakao'));
router.get('/kakao/callback', passport.authenticate('kakao', {
    failureRedirect: '/',
}), (req, res) => {
    console.log("req.user 정보: ", req.user);
    console.log("req.session 정보: ", req.session);
    res.redirect('http://localhost:3000/');
});

module.exports = router;