'use strict'

!function () {
  var app = angular.module('app', []);

  app.controller('tableCtrl', function ($scope) {
    $scope.tableContent = [{name:'A', age:'1'},{name:'B', age:'2'},{name:'C', age:'3'},{name:'D', age:'4'},{name:'E', age:'5'}];
  })

  angular.module(['app']).directive('myTable', function (){
    return{
      restrict: 'E',
      template:'<table ng-model="myContent"><tr><th>Name</th><th>age</th></tr><tr ng-repeat="item in myContent"><td>{{item.name}}</td><td>{{item.age}}</td></tr></table>',
      replace: 'true',
      scope:{
        myContent:'='
      }
    }
  })


  app.controller('storeCtrl', function ($scope){
    $scope.city = ['大连','沈阳'];
    $scope.province = ['北京','辽宁'];
    $scope.stores = [
        {name:'大悦城店', address:'上海市闸北区西藏北路16号', telephone:'021-8888 8888'},
        {name:'大悦城店', address:'上海市闸北区西藏北路16号', telephone:'021-8888 8888'},
        {name:'大悦城店', address:'上海市闸北区西藏北路16号', telephone:'021-8888 8888'},
        {name:'大悦城店', address:'上海市闸北区西藏北路16号', telephone:'021-8888 8888'},
        {name:'大悦城店', address:'上海市闸北区西藏北路16号', telephone:'021-8888 8888'},
        {name:'大悦城店', address:'上海市闸北区西藏北路16号', telephone:'021-8888 8888'},
        {name:'大悦城店', address:'上海市闸北区西藏北路16号', telephone:'021-8888 8888'},
        {name:'大悦城店', address:'上海市闸北区西藏北路16号', telephone:'021-8888 8888'}
      ];
  })
}();






