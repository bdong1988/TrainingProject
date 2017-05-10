'use strict'

!function () {
  var app = angular.module('app', []);

  app.controller('ctrl', function ($scope) {
  })

  angular.module(['app']).directive('myDirective', function (){
    return{
      restrict: 'E',
      template: '<input ng-model="myText" type="text"></input>',
      replace: 'true',
      scope:{
        myText:'='
      }
    }
  })
}();






