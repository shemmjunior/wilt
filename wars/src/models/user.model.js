var mongoose = require('mongoose');
var Schema = mongoose.Schema;

UserSchema = new Schema(
    {
    email: String,
    username: String,
    password: String,
    avatar: String
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);