/**
 * @author dxw
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/boox_server', function(err){
	if(err){
		console.log('connect to db error: ' + err.message);
		process.exit(1);
	}
});

require ("./sysUpdate");
exports.SysUpdate = mongoose.model("SysUpdate");

require('./file');
exports.File = mongoose.model('File')
