(function(){
  'use strict';

  angular.module('task')
  .factory('Task', ['$http', function($http){
    function create(task){
      return $http.post('/tasks', task);
    }
    function all(){
      return $http.get('/tasks').then(function(tasksResponse){
        return $http.get('/priorities').then(function(prioritiesResponse){
          var tasks = tasksResponse.data.tasks,
              priorities = prioritiesResponse.data.priorities;
          tasks = tasks.map(function(t){
            var priority = _.find(priorities, function(p){return p._id === t.priorityId;});
            t.priority = priority;
            return t;
          });

          return tasks;
        });
      });
    }
    function toggle(task){
      return $http.post('/tasks/toggle', task);
    }
    return {create:create, all:all, toggle:toggle};
  }]);
})();

