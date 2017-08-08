//both mean the same thing, just different ways
angular.module('myApp', []);

var myApp = angular.module('myApp');

myApp.controller('myController', ['$scope', 'mainCharacter', function($scope, mainCharacter) {
  $scope.myFirstName = "Reyn";
  $scope.myModel = "Ready Player One";
  $scope.character = mainCharacter;
}]);