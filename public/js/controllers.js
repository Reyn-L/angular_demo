//both mean the same thing, just different ways
angular.module('myApp');

var myApp = angular.module('myApp');

myApp.controller('myController', ['$scope','CharacterVersionFactory', 'mainCharacter', function($scope, CharacterVersionFactory, mainCharacter) {
  $scope.myFirstName = "Reyn";
  $scope.myModel = "Ready Player One";
  $scope.character = mainCharacter;
  $scope.cvfResult = CharacterVersionFactory.genCharVersion();
}]);