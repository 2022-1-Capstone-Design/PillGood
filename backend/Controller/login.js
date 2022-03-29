const axios = require("axios");
const res = require("express/lib/response");

module.exports = {
    async getProfile (accessToken) {
        const result = await axios.get({
            url: 'https://kapi.kakao.com/v2/user/me',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
        }).then(res => JSON.parse(res))
          .catch(error => res.status(500));
        console.log(`result: ${result}`);
        return { id : result.id, profile : result.kakao_account.profile };
    }
}
