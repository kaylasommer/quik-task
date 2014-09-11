'use strict';

function Priority(o){
  this.name  = o.name;
  this.color = o.color;
}

Object.defineProperty(Priority, 'collection', {
  get: function(){return global.mongodb.collection('priorties');}
});

Priority.create = function(o, cb){
  var priority = new Priority(o);
  Priority.collection.save(priority, cb);
};

module.exports = Priority;