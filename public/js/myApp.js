angular.module('myApp', []);

var myApp = angular.module('myApp');

myApp
  .config(function() {
    //config
  })
  .run(function() {
    //initialize
  });

myApp.controller('myController', ['$scope', function($scope) {
  $scope.myFirstName = "Reyn";
  $scope.myModel = "Ready Player One";
}]);