const passport = require('passport');
const kakaoStrategy = require('passport-kakao').Strategy;
const User = require("../Schemas/user");

module.exports = ( ) => {
    // 새로운 카카오 로그인 전략 생성
    passport.use(new kakaoStrategy({
        clientID: "326cd91121ead061d9c149f8690d1706",
        // Redirect URL
        callbackURL: "/auth/kakao/callback",
    }, async (accessToken, refreshToken, profile, done) => {
        console.log('kakaoprofile', profile);
        try {
            const existUser = await User.find({ id: profile.id });
            if (Object.keys(existUser).length === 0) {
                await User.create( { id: profile.id });
            }
            done(null, existUser);
        } catch(error) {
            done(error)
        }
    }));
}