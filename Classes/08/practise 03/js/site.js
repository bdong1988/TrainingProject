'use strict'

!function () {
  var app = angular.module('app', []);

  app.controller('ctrl', function ($scope) {
    $scope.tableContent = [{name:'A', age:'1'},{name:'B', age:'2'},{name:'C', age:'3'},{name:'D', age:'4'},{name:'E', age:'5'}];
  })

  angular.module(['app']).directive('myTable', function (){
    return{
      restrict: 'E',
      template:'<table><tr><th>Name</th><th>age</th></tr><tr ng-repeat="item in tableContent"><td>{{item.name}}</td><td>{{item.age}}</td></tr></table>',
      replace: 'true',
    }
  })
}();






