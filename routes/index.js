
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index')
};

var SysUpdate = require("../controllers/sysUpdate");
exports.getLastVersion_beta = SysUpdate.getLastVersion;
exports.addVersion = SysUpdate.addVersion;
exports.deleteVersion = SysUpdate.deleteVersion;
exports.updateVersion = SysUpdate.updateVersion;

/*
 * have new version system : 1000
 * no new version system: 1001
 */

exports.checkUpdate = function(req, res) {
	var dev_version = req.body.version;
	if(dev_version < 20120805) {
		res.send({status: 1000});
	} else{
		res.send({status: 1001});
	}
};

exports.getLastVersion = function(req, res) {
	res.send({
		version: '2012/08/05更新',
		url: 'http://www.google.com',
		size: '30.4M',
		file: [
		{
			name: 'test1',
			url: 'http://www.google.com/1',
			size: '5.8M',
			change_log: 'No change'
		},
		{
			name: 'test2',
			url: 'http://www.google.com/2',
			size: '10.8M',
			change_log: 'No change'
		},
		{
			name: 'test3',
			url: 'http://www.google.com/3',
			size: '8M',
			change_log: 'No change'
		},
		{
			name: 'test4',
			url: 'http://www.google.com/4',
			size: '7.8M',
			change_log: 'No change'
		}]
	});
};
