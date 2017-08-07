angular.module('myApp', []);

var myApp = angular.module('myApp');

myApp
  .config(function() {
    //config
  })
  .run(function() {
    //initialize
    console.log('running');
  });

myApp.controller('myController', ['$scope', function($scope) {
  $scope.myFirstName = "Reyn";
}]);