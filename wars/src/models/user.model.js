var mongoose = require('mongoose');
var Schema = mongoose.Schema;

UserSchema = new Schema(
    {
    email: {
        type: String,
        required: true,
        unique: 1,
        trim: true
    },
    username: String,
    bio: String,
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    avatar: String
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);