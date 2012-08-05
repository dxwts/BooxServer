/**
 * @author dxw
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;
	
var FileSchema = new Schema({
	url: {type: String},
	name: {type: String},
	size: {type: String},
	change_log: {type: String},
});
	
	
var SysUpdateSchema = new Schema({
	version_id: {type: ObjectId},
	version: {type: String},
	url: {type: String},
	change_log: {type: String},
	file: [FileSchema],
	version_data: {Type: Number},
	size: {type: String, default:'0'},
	create_at: {type: Date, default: Date.now}
});

mongoose.model('SysUpdate', SysUpdateSchema);