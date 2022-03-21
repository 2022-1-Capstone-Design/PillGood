const passport = require("passport");
const user = require("../Schemas/user");
const kakao = require("./kakaoStrategy");

module.exports = ( ) => {

    // 로그인시 실행
    // user의 id로 세션 초기화
    passport.serializeUser((user, done) => {
        done(null, user.id);
    })

    // request의 user에 DB에서 찾은 유저 정보 저장
    passport.deserializeUser((id, done) => {
        user.findOne({ id: id })
            .then(user => done(null, user))
            .catch(error => done(error));
    })
    kakao( );
}