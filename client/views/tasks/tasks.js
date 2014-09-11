(function(){
  'use strict';

  angular.module('task')
  .controller('TasksCtrl', ['$scope', 'Task', 'Priority', function($scope, Task, Priority){
    $scope.task = {};
    $scope.priorities = [];
    $scope.tasks = [];

    Task.all().then(function(response){
      $scope.tasks = response.data.tasks;
    });

    $scope.add = function(){
      Task.create($scope.task).then(function(response){
        console.log(response);
        $scope.tasks.push(response.data.task);
        $scope.task = {};
      });
    };

    Priority.all().then(function(response){
      $scope.priorities = response.data.priorities;
    });

  }]);
})();
