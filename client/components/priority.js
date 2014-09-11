(function(){
  'use strict';

  angular.module('task')
  .factory('Priority', ['$http', function($http){
    function create(priority){
      return $http.post('/priorities', priority);
    }
    return {create:create};
  }]);
})();

