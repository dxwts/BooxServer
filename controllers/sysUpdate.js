/**
 * @author dxw
 */


var models = require('../models'), SysUpdate = models.SysUpdate;


module.exports = {
	getLastVersion : function (req, res) {
		SysUpdate.find({}, ['last'], function (err, version) {
			if(err) return next(err);
			if(!version) {
				res.send({version : null});
			}
			res.send({version: version});
		});
	},
	addVersion : function (req, res) {
		var sysUpdate = new SysUpdate();
		sysUpdate.version = req.body.version.version;
		sysUpdate.url = req.body.version.url;
		sysUpdate.change_log = req.body.version.change_log;
		sysUpdate.file.push(req.body.version.file);
		sysUpdate.version_date = req.body.version.version_date;
		sysUpdate.save();
		res.send({status: "sucess"});
	},
	deleteVersion : function (req, res) {
		res.send({status: "sucess"});
	},
	updateVersion : function (req, res) {
		res.send({status: "sucess"});
	}
}
