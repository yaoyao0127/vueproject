var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    phone: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
});
module.exports = mongoose.model('users', userSchema);