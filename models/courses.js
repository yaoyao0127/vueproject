var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
    _identity: {
        type: String,
    },
    _class: {
        type: String
    },
    _level: {
        type: String
    },
    _title: {
        type: String
    },
    _status: {
        type: String
    },
    _imgPath: {
        type: String
    },
    _videoPath: {
        type: String
    },
    _updateTime: {
        type: String
    },
});
module.exports = mongoose.model('courses', courseSchema);