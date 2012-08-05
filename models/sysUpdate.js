/**
 * @author dxw
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;
	
var SysUpdateSchema = new Schema({
	version_id: {type: ObjectId},
	version: {type: String},
	url: {type: String},
	change_log: {type: String},
	create_at: {type: Date, default: Date.now}
});

mongoose.model('SysUpdate', SysUpdateSchema);