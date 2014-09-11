'use strict';

var Priority = require('../models/priority');

exports.create = function(req,res){
  Priority.create(req.body, function(err, priority){
    console.log(priority);
    res.send({priority: priority});
  });
};
