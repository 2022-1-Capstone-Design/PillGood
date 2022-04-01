const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const login = require("../Controller/login");
const User = require("../Schemas/user");

// router.get('/kakao', passport.authenticate('kakao'));
// router.get("/kakao/logout",
// deserializeUser 작업 완료 후 fullfill 상태에서 실행
// async (req, res) => {
//     try {
//         const ACCESS_TOKEN = req.user.accessToken;
//         const logout = await axios({
//             method: 'post',
//             url: "https://kapi.kakao.com/v1/user/logout",
//             headers: {
//                 'Authorization': `Bearer ${ACCESS_TOKEN}`
//             }
//         });
//     } catch(error) {
//         console.log(error);
//     }
//     req.logout( );
//     req.session.destroy( );

//     console.log(req.session);

//     res.redirect("/");
// })

// router.get('/kakao/callback', passport.authenticate('kakao', {
//     failureRedirect: '/',
// }), (req, res) => {
//     console.log("req.user 정보: ", req.user);
//     console.log("req.session 정보: ", req.session);
//     res.redirect('http://localhost:3000/');
// });

router.post("/kakao", async (req, res) => {
  try {
    const kakaoUser = await login.getProfile(req.body.access_token);
    const {doc, created} = await User.findOrCreate({ id: kakaoUser.id, name: kakaoUser.properties.nickname });
    let responseData = {
      success : true,
      user: doc,
    }
    const token = jwt.sign({
      id : doc.id,
      name : doc.name,
      access_token : req.body.access_token,
    }, "SecretKey");
    responseData.jwt= token;
    return res.status(created? 201 : 200).json(responseData);
  } catch (error) {
    return res.status(500).json({
      success: false,
      error
    });
  }
});

router.post("/kakao/logout", login.logout);

module.exports = router;
