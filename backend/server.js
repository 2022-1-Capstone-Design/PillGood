const express = require("express");
require("dotenv").config({ path: "../frontend/.env" });

const bodyParser = require("body-parser");

// Router
const authRouter = require("./Router/auth");
const surveyRouter = require("./Router/survey");

// Express
const app = express();

// Body-Parser
app.use(bodyParser.json());

// DB
const connect = require("./Schemas");

// DB 연결
connect();

// Router 연결
app.use("/test", authRouter); //경로 잠깐 바꿔놨습니다
app.use("/survey", surveyRouter);

const port = 5000; //React가 3000번 포트를 사용하기 때문에 node 서버가 사용할 포트넘버는 다른 넘버로 지정해준다.

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
