const express = require("express");
const User = require("../Schemas/user")

const router = express.Router( );

// user/로 get 요청이 들어오면 모든 user 프런트에 보냄
router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

// user/name으로 get 요청이 들어오면 해당 name의 user 프런트에 보냄
router.get('/:name', async (req, res, next) => {
    try {
        const findUser = await User.find({ name: req.params.name })
        res.json(findUser);
    } catch (error) {
        console.log(error);
        next(error);
    }
});

module.exports = router;