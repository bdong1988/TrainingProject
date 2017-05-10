'use strict'

var app = angular.module('app',[]);

app.controller('ctrl', function ($scope){
  $scope.person = {name:'Dean'};
})

angular.module(['app']).directive('hello', function (){
  return{
    restrict:'E',
    template:'<div>Hello Angular</div>',
    replace:true
  }
})





