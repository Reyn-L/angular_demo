//both mean the same thing, just different ways
angular.module('myApp');

var myApp = angular.module('myApp');

myApp.controller('myController', ['$scope','CharacterVersionFactory', 'mainCharacter', 'BookService', function($scope, CharacterVersionFactory, mainCharacter, BookService) {
  $scope.myFirstName = "Reyn";
  $scope.myModel = "Ready Player One";
  $scope.character = mainCharacter;
  $scope.cvfResult = CharacterVersionFactory.genCharVersion();
  $scope.books = BookService.getBooks();
}]);