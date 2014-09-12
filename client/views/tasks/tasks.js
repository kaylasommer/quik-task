(function(){
  'use strict';

  angular.module('task')
  .controller('TasksCtrl', ['$scope', 'Task', 'Priority', function($scope, Task, Priority){
    $scope.task = {};
    $scope.priorities = [];
    $scope.tasks = [];

    Task.all().then(function(tasks){
      $scope.tasks = tasks;
    });

    $scope.add = function(){
      Task.create($scope.task).then(function(response){
        var task = response.data.task;
        task.priority = _.find($scope.priorities, function(p){return p._id === task.priorityId;});
        $scope.tasks.push(task);
        $scope.task = {};
      });
    };

    Priority.all().then(function(response){
      $scope.priorities = response.data.priorities;
    });

    $scope.toggle = function(task){
      Task.toggle(task).then(function(t){
        task = t;
      });
    };

  }]);
})();
