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
              res,send({status : "success", versions : null});
          }
          return version;
      });  
    },
	getLastVersion : function (req, res) {
	    if(req.query._id !== undefined) {
	        id = req.query._id;
	    
	    console.log("get version id : "+id);
		SysUpdate.findById(id, function (err, version) {
			if(err) return next(err);
			if(!version) {
				res.send({status : "success", version : null});
			}
			res.send({status : "success", version: version});
		});
		} else {
		    res.send({status : "failed" , info : "Parameter does not"})
		}
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
		res.send({status: "success"});
	},
	checkUpdate : function (req, res) {
	    if(req.query.version !== undefined && req.query.deviceVersion !== undefined) {
		var currentVersion = req.query.version;
		var deviceVersion = req.query.deviceVersion;
		var code = 1001;
		var _id = null;
		var newVersion = null;
		SysUpdate.find({deviceVersion : deviceVersion, status : 1}, function (err, list) {
			if (err) return next(err);
			if(!list) {
				res.send({status:"success", version : null})
			}
			for(var i = 0; i < list.length; i++) {
				if(currentVersion < list[i].version) {
				    currentVersion = list[i].version;
					newVersion = list[i];
					code = 1000;
				}
			}
		if(newVersion !== null) {
		  res.send({status:"success", code : code, version : newVersion.version, _id : newVersion._id});
		} else {
		    res.send({status:"success", code : code, version : "no version update"});
		}
		});
		} else {
		    res.send({status : "failed" , info : "Parameter does not"})
		}
	}
}
