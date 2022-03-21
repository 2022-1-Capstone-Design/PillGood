const passport = require("passport");
const user = require("../Schemas/user");
const kakao = require("./kakaoStrategy");

module.exports = ( ) => {

    // 로그인시 실행
    // user의 id로 세션 초기화
    passport.serializeUser((token, done) => {
        done(null, { id: token.user.id, accessToken: token.accessToken });
    })

    // request의 user에 DB에서 찾은 유저 정보 저장
    passport.deserializeUser((token, done) => {
        user.findOne({ id: token.id })
            .then(user => done(null, { accessToken: token.accessToken, user: user }))
            .catch(error => done(error));
    })
    kakao( );
}