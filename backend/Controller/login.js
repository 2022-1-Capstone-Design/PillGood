const axios = require("axios");
const res = require("express/lib/response");

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
    }
}
