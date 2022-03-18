const express = require("express");

// Router
const test = require("./Router/test");
const userRouter = require("./Router/user");
const authRouter = require("./Router/auth");

// DB
const connect = require("./Schemas");

// Passport
const passport = require("passport");
const passportConfig = require("./Passport")

const app = express();

// DB 연결
connect( );

// Passport 설정
passportConfig( );

// Passport 연결
app.use(passport.initialize( ));

// Router 연결
app.get("/", (req, res) => {
  res.render("./view/login");
});
app.use("/api", test);
app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

const port = 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
