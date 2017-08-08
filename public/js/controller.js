var myApp = angular.module('myApp');

myApp.controller('myController', ['$scope', function($scope) {
  $scope.myFirstName = "Reyn";
  $scope.myModel = "Ready Player One";
}]);