/*jshint esversion: 6 */
//both mean the same thing, just different ways
angular.module('myApp');

var myApp = angular.module('myApp');

myApp.controller('myController', ['$scope','CharacterVersionFactory', 'mainCharacter', 'BookService', 'Movies', function($scope, CharacterVersionFactory, mainCharacter, BookService, Movies) {
  $scope.myFirstName = "Reyn";
  $scope.myModel = "Ready Player One";
  $scope.character = mainCharacter;
  $scope.cvfResult = CharacterVersionFactory.genCharVersion();
  $scope.newbook = {title: '', author: '' };
  $scope.BookService  = BookService;
  $scope.addBook = function() {
    var newBook = {
      title: $scope.newBook.title,
      author: $scope.newBook.author
    };
    BookService.addBook(newBook);
    $scope.newBook.title = '';
    $scope.newbook.author = '';
  };

  $scope.movies = [];
  $scope.search = '';
  Movies.getMovies()
   .then((movies) => {
    console.log(movies);
    $scope.movies = movies;
  });
}]);