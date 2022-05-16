const axios = require("axios");
const User = require("../Schemas/user");
const jwt = require("jsonwebtoken");

const getProfile = async (accessToken) => {
    // access token으로 카카오 서버로부터 유저 profile 가져옴
    return await axios.get("https://kapi.kakao.com/v2/user/me",
    {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
        },
    }).then(res => res.data)
      .catch(error => res.status(500));
};

const login = async (req, res) => {
    try {
        const kakaoUser = await getProfile(req.body.access_token);
        // 해당 유저가 DB에서 찾고 없으면 create
        const {doc, created} = await User.findOrCreate({ id: kakaoUser.id, name: kakaoUser.properties.nickname });
        // response data에 실어서 보냄
        let responseData = {
            success : true,
            user: doc,
        }
        // jwt 토큰 생성
        const token = jwt.sign({
            id : doc.id,
            name : doc.name,
            access_token : req.body.access_token,
        }, process.env.JWT_KEY
         , { expiresIn: req.body.expires_in }
        );
        responseData.jwt= token;
        return res.status(created? 201 : 200).json(responseData);
    } catch (error) {
        return res.status(500).json({
        success: false,
        error
        });
    }
};

const logout = async (req, res) => {
    try {
        // 토큰 복호화
        const token = await jwt.verify(req.body.token, process.env.JWT_KEY);
        // 복호화된 access token을 이용하여 해당 유저 카카오 서버에서 logout
        await axios.post("httsp://kapi.kakao.com/v1/user/logout", 
        {
            headers: {
                'Authorization': `Bearer ${token.access_token}`
            }
        });
        return res.status(200).json({ success: true });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error
        });
    }
};

const verifyUser = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (JSON.parse(token)) {
            const decryption = jwt.verify(token, process.env.JWT_KEY);
            req.user = decryption.id;
        }
        next( );
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
}

module.exports = {
    getProfile,
    login,
    logout,
    verifyUser,
};
