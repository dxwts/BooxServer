
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index')
};

var SysUpdate = require("../controllers/sysUpdate");
exports.getLastVersion = SysUpdate.getLastVersion;
exports.addVersion = SysUpdate.addVersion;
exports.deleteVersion = SysUpdate.deleteVersion;
exports.updateVersion = SysUpdate.updateVersion;

