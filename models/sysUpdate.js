/**
 * @author dxw
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;
	
	
var SysUpdateSchema = new Schema({
    deviceVersion: {type: String},
	version: {type: String},
	url: {type: String},
	size: {type: String, default:'0'},
	status: {type: Number, default: 1 },
	create_at: {type: Date, default: Date.now}
});

mongoose.model('SysUpdate', SysUpdateSchema);