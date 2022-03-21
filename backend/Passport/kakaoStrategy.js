const passport = require('passport');
const kakaoStrategy = require('passport-kakao').Strategy;
const User = require("../Schemas/user");

module.exports = ( ) => {
    // 새로운 카카오 로그인 전략 생성
    passport.use(new kakaoStrategy({
        clientID: "326cd91121ead061d9c149f8690d1706",
        // Redirect URL
        callbackURL: "/auth/kakao/callback",
    }, 
    /** 
     * passport-kakao 모듈의 Strategy.js 참고
     * 모듈은 accessToken을 이용하여 "'https://kapi.kakao.com/v2/user/me"에서 유저정보를 받아와 profile return
    */
    async (accessToken, refreshToken, profile, done) => {
        console.log('kakaoprofile', profile);
        try {
            const existUser = await User.findOne({ id: profile.id });
            const tokenUser = {
                accessToken: accessToken || '',
            }
            // 없으면 회원가입 처리
            if (!existUser) {
                const newUser = await User.create( { id: profile.id, name:  profile.username } );
                tokenUser.user = newUser;
                done(null, tokenUser);
            } else {
                tokenUser.user = existUser;
                done(null, tokenUser);
            }
        } catch(error) {
            console.log(error);
            done(error);
        }
    }));
}
//test
