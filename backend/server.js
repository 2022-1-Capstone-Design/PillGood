const express = require("express");

// Router
const test = require("./Router/test");
const userRouter = require("./Router/user");
const authRouter = require("./Router/auth");

// DB
const connect = require("./Schemas");

const app = express( );

// DB 연결
connect( );

// Router 연결
app.use("/api", test);
app.use("/user", userRouter);
app.use("/auth", authRouter);

const port = 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
