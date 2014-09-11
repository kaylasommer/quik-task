(function(){
  'use strict';

  angular.module('task')
  .controller('PrioritiesCtrl', ['$scope', 'Priority', function($scope, Priority){
    $scope.priority = {};
    $scope.priorities = [];

    $scope.add = function(){
      Priority.create($scope.priority).then(function(response){
        $scope.priorities.push(response.data.priority);
        $scope.priority = {};
      });
    };
  }]);
})();
