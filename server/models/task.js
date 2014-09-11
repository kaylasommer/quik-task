'use strict';

var Mongo = require('mongodb');

function Task(o){
  this.name  = o.name;
  this.due = Date(o.due);
  this.priority = Mongo.ObjectID(o.priority);
}

Object.defineProperty(Task, 'collection', {
  get: function(){return global.mongodb.collection('tasks');}
});

Task.create = function(o, cb){
  var task = new Task(o);
  Task.collection.save(task, cb);
};

Task.all = function(cb){
  Task.collection.find().toArray(cb);
};

module.exports = Task;
