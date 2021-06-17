// load mongoose since we need it to define a model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
WiltSchema = new Schema(
    {
    title : String,
    description : String,
	ref_link_one : String,
	ref_link_two : String,
    user_id: String
    },
    { timestamps: true }
);

module.exports = mongoose.model('Wilt', WiltSchema);