'use strict';

var Task = require('../models/task'),
    Mongo = require('mongodb');

exports.create = function(req,res){
  Task.create(req.body, function(err, task){
    res.send({task:task});
  });
};

exports.index = function(req, res){
  Task.all(function(err, tasks){
    console.log(tasks);
    res.send({tasks:tasks});
  });
};

exports.toggle = function(req, res){
  var task = req.body;
  task._id = Mongo.ObjectID(task._id);
  task.isComplete = !task.isComplete;
  Task.collection.save(task, function(err, task){
    res.send({task:task});
  });
};
