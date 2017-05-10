'use strict'

!function () {
  var app = angular.module('app', []);

  app.controller('ctrl', function ($scope) {
    $scope.person = { name: 'Dean' };
    $scope.names = [1, 2, 3, 4, 5];
    $scope.$watch('person.name', function (p1, p2, p3) {
      console.log(p1); //new value
      console.log(p2); //old value
      console.log(p3); //scope
    })
  })

  app.filter('myFilter', function (){
    return function (name){
      return name + ' good boy';
    }
  })

  angular.module(['app']).directive('hello', function () {
    return {
      restrict: 'E',
      template: '<div>Hello Angular222</div>',
      replace: true
    }
  })
}();






