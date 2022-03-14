const mongoose = require("mongoose");

const connect = ( ) => {
    // 개발 환경일 때 콘솔을 통해 몽구스가 생성하는 쿼리 내용 확인
    if (process.env.NODE_ENV !== 'production') {
        mongoose.set('debug', true);
    }
    
    /* 
    connection part
    프로젝트에 사용할 데이터베이스 이름 입력
    callback: 연결 성공 여부 출력
    */
    mongoose.connect('mongodb://root:gks253@localhost:27017/admin', {
        dbName: 'test',
        // mongoose 6.0 미만에서만 적용
        // useNewUrlParser: true, userCreateIndex: true,
    }, error => {
        if (error) {
            console.log(`mongoDB connection fail : ${error}`);
        } else {
            console.log('mongoDB connection success');
        }
    });
};

mongoose.connection.on('error', error => {
    console.log(`mongoDB connection error : ${error}`); 
});

mongoose.connection.on('disconnected', ( ) => {
    console.log('mongoDB is disconnected. Reconnect mongoDB');
    connect( );
});

module.exports = connect 
