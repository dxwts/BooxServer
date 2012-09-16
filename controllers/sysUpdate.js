/**
 * @author dxw
 */


var models = require('../models'), SysUpdate = models.SysUpdate;


module.exports = {
    
    index : function (req, res) {
      SysUpdate.find({status : 1}, function (err, versions) {
          if(err) return next(err);
          if(!versions) {
              res,send({versions : null});
          }
          res.render("index", {versions : versions});
      });  
    },
    
    getVersionList : function (req, res) {
      SysUpdate.find({}, function (err, versions) {
          if(err) return next(err);
          if(!versions) {
              res,send({versions : null});
          }
          return version;
      });  
    },
	getLastVersion : function (req, res) {
		SysUpdate.findById(req.query.id, function (err, version) {
			if(err) return next(err);
			if(!version) {
				res.send({version : null});
			}
			res.send({version: version});
		});
	},
	addVersion : function (req, res) {
		var sysUpdate = new SysUpdate();
		sysUpdate.deviceVersion = req.body.version.deviceVersion; 
		sysUpdate.version = req.body.version.version;
		sysUpdate.url = req.body.version.url;
		sysUpdate.size = req.body.version.size
		sysUpdate.save();
		 res.redirect('/');
	},
	deleteVersion : function (req, res) {
	    SysUpdate.findById(req.query._id, function (err, version) {
            if(err) return next(err);
            if(!version) {
                res.send({version : null});
            }
            console.log("delete :" + version.version);
            version.status = 0;
            version.save();
        });
        res.redirect('/');
	},
	updateVersion : function (req, res) {
	    SysUpdate.findById(req.query.id, function (err, version) {
            if(err) return next(err);
            if(!version) {
                res.send({version : null});
            }
            version.status = 0;
            version.save();
        });
		res.send({status: "sucess"});
	},
	checkUpdate : function (req, res) {
		var version = req.query.version;
		var code = 1001;
		var id;
		SysUpdate.find({}, function (err, list) {
			if (err) return next(err);
			if(!list) {
				res.send({version : null})
			}
			for(var i = 0; i < list.length; i++) {
				if(version < list[i].version) {
					version = list[i].version;
					id = list[i]._id;
					code = 1000;
				}
			}
		res.send({status:"sucess", code : code, version : version, id : id});
		});
	}
}
