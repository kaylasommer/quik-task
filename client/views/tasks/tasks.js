(function(){
  'use strict';

  angular.module('task')
  .controller('TasksCtrl', ['$scope', 'Task', 'Priority', function($scope, Task, Priority){
    $scope.task = {};
    $scope.tasks = [];
    $scope.priorities = [];

    Priority.all().then(function(response){
      $scope.tasks = response.data.tasks;
    });

    Priority.all().then(function(response){
      $scope.priorities = response.data.priorities;
    });

    $scope.add = function(){
      Task.create($scope.tasks).then(function(response){
        console.log(response);

        $scope.tasks.push(response.data.task);
        $scope.task = {};
      });
    };
  }]);
})();
