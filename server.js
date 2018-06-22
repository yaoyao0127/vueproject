const express = require('express');
const app = express();
//const routes = require('./routes/index.js');
//const exec = require('child_process').exec;

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
//json解析器support encoded bodies
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({
    extended: true
}));

//引入pythonshell
// var myPythonScriptPath = './facedetect/webcam/demoread.py';
// var PythonShell = require('python-shell');



//引入cookie中间层
/*const cookieParser = require('cookie-parser');
const session = require('express-session');
var mongoStore = require('connect-mongo')(session);
app.use(cookieParser());
app.use(session({
    secret: 'wyy',
    store: new mongoStore({
        url: 'mongodb://localhost:27017/register',
        collection: 'sessions'
    })
}));*/

//连接本地数据库
const mongoose = require('mongoose');
const querystring = require('querystring');
mongoose.connect('mongodb://localhost:27017/musicweb');
var db = mongoose.connection;
let MyUser = require('./models/users');
let MyCourse = require('./models/courses');
// let MyFace = require('./models/faces.js');

//连接成功
db.on('open', function() {
    console.log('数据库连接成功');
});
// 连接失败
db.on('error', function() {
    console.log('数据库连接失败');
});


//////////////////////////////////////////////////////////////////////////////////////////
//接收课程列表页请求api
let courseList = new Array();
app.post("/api/course", (req, res) => {
    //开始接收数据
    //courseList.splice(0, courseList.length);
    MyCourse.find({
        _identity: {
            $gte: 1
        },
    }, function(err, docs) {
        //console.log(docs);
        return res.json(docs);
    });
});
//////////////////////////////////////////////////////////////////////////////////////////
app.post('/api/insertCourse', (req, res) => {
    //console.log("已成功接收");
    req.on('data', data => {
        console.log('hah');
        console.log(data.toString());
        let decodedata = decodeURIComponent(data);
        let result = JSON.parse(decodedata);
        console.log(result);
        res.send("hello");
    })
    // req.on('end', function() {
    //     res.send('存储成功');
    // })


});
app.get('/', function(req, res) {
    res.send("node启动成功")
});
// exec('python ./facedetect/webcam/webcam_detection/demoread.py', function(error, stdout, stderr) {
//     if (stdout.length > 1) {
//         console.log('you offer args:', stdout);
//     } else {
//         console.log('you don\'t offer args');
//     }
//     if (error) {
//         console.info('stderr : ' + stderr);
//     }
// });
app.listen(3000);
console.log('监听3000端口中');

//const port = process.env.PORT || 5000;
//app.listen(port, () => console.log(`Listening on port ${port}`));