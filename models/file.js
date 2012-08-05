/**
 * @author dxwts
 */

var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;
	
var FileSchema = new Schema({
	file_id: {type: ObjectId},
	version_id: {type: String},
	url: {type: String},
	name: {type: String},
	size: {type: String},
	change_log: {type: String},
	create_at: {type: Date, default: Date.now}
});

mongoose.model('File', FileSchema);
