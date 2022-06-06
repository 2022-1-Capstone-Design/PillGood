const axios = require("axios");
const User = require("../Schemas/user");
const jwt = require("jsonwebtoken");

const getProfile = async (accessToken) => {
  // access token으로 카카오 서버로부터 유저 profile 가져옴
  return await axios
    .get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    })
    .then((res) => res.data)
    .catch((error) => res.status(500));
};

const login = async (req, res) => {
  try {
    const kakaoUser = await getProfile(req.body.access_token);
    // 해당 유저가 DB에서 찾고 없으면 create
    const { doc, created } = await User.findOrCreate({
      id: kakaoUser.id,
      name: kakaoUser.properties.nickname,
    });

    // jwt 토큰 생성
    const token = jwt.sign(
      {
        id: doc.id,
        access_token: req.body.access_token,
      },
      process.env.JWT_KEY,
      { expiresIn: req.body.expires_in }
    );

    const options = {
      maxAge: req.body.expires_in * 1000, // JWT token과 만료 시간과 동일하게 cookie 파기
      httpOnly: true,
      // sameSite: "none", // client가 server와 서로 다른 ip라도 동작하도록 함
      // secure: true, // sameSite를 none으로 설정했을 경우 secure : true
      overwrite: true, // 이전에 설정한 동일한 이름의 쿠키 덮어 씌움
      domain: ".pillgood.ml",
    };

    res
      .cookie("token", token, options) // cookie에 JWT 담기
      .cookie("check", true, {
        maxAge: req.body.expires_in * 1000,
        // sameSite: "none",
        // secure: true,
        domain: ".pillgood.ml",
      });

    return res.status(created ? 201 : 200).json({ success: true });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

const logout = async (req, res) => {
  try {
    // 토큰 복호화
    const cookie = req.headers.cookie.split("=")[1];
    const token = await jwt.verify(cookie.split(";")[0], process.env.JWT_KEY);
    // 복호화된 access token을 이용하여 해당 유저 카카오 서버에서 logout
    await axios.post("httsp://kapi.kakao.com/v1/user/logout", {
      headers: {
        Authorization: `Bearer ${token.access_token}`,
      },
    });
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error,
    });
  }
};

const verifyUser = async (req, res, next) => {
  try {
    const cookie = req.headers.cookie;
    if (cookie) {
      const token = cookie.split("=")[1];
      const decryption = jwt.verify(token.split(";")[0], process.env.JWT_KEY);
      req.user = decryption.id;
    }
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getProfile,
  login,
  logout,
  verifyUser,
};
