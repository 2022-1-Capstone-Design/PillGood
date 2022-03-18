const passport = require('passport');
const kakaoStrategy = require('passport-kakao').Strategy;

module.exports = ( ) => {
    // 새로운 카카오 로그인 전략 생성
    passport.use(new kakaoStrategy({
        clientID: "326cd91121ead061d9c149f8690d1706",
        // Redirect URL
        callbackURL: "/auth/kakao/callback",
    }, async (accessToken, refreshToken, profile, done) => {
        console.log('kakaoprofile', profile);
        done(null);
    }));
}