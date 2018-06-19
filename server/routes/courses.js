var express = require('express');
var router = express.Router();

var courses = {
    "courses": [{
        "id": "1",
        "title": "音乐基础课程-初级1",
        "class": "音乐基础课程",
        "level": "初级",
        "status": "已上线",
        "updateTime": "20180423 20:10:00"
    }, {
        "id": "1",
        "title": "民乐演奏课程-初级1",
        "class": "民乐演奏课程",
        "level": "初级",
        "status": "审核中",
        "updateTime": "20180423 20:10:00"
    }, {
        "id": "3",
        "title": "西乐演奏课程-初级1",
        "class": "西乐演奏课程",
        "level": "初级",
        "status": "审核中",
        "updateTime": "20180423 20:10:00"
    }, {
        "id": "4",
        "title": "声乐演奏课程-初级1",
        "class": "声乐演奏课程",
        "level": "初级",
        "status": "审核中",
        "updateTime": "20180423 20:10:00"
    }, {
        "id": "5",
        "title": "名师专题讲座-初级1",
        "class": "名师专题讲座",
        "level": "初级",
        "status": "审核中",
        "updateTime": "20180423 20:10:00"
    }],
    "readers": [{
        "id": "1",
        "name": "wyy",
        "age": 20
    }, {
        "id": "2",
        "name": "wyy",
        "age": 20
    }]
};
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});
router.get('/api/courses', function(req, res, next) {
    res.send(courses);
});