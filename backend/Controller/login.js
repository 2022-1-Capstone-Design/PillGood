const axios = require("axios");
const res = require("express/lib/response");
const jwt = require("jsonwebtoken");

module.exports = {
    async getProfile (accessToken) {
            return await axios.get("https://kapi.kakao.com/v2/user/me",
            {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                },
            
            }).then(res => res.data)
            .catch(error => res.status(500));
    },

    async logout (req, res) {
        const token = await jwt.verify(req.body.token, "SecretKey");
        return await axios.post("httsp://kapi.kakao.com/v1/user/logout", 
        {
            headers: {
                'Authorization': `Bearer ${token.access_token}`
            }
        }).then(response => res.status(200).json({
            success: true
        })).catch(error => res.status(500).json({
            sucess: false,
            error
        }));
    }
}
