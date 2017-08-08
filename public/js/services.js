angular.module('myApp')
.service('BookService', [function() {
  this.books = [
  {
    title: 'Rebecca',
    author: 'Dafney D.'
  },
  {
    title: 'Gone with the Wind',
    author: 'Marget Mitchell'
  },
  {
    title: 'Dark Tower',
    author: 'Stephen King'
  }
  ];

  this.getBooks = function() { return this.books; };

  this.getBook = function(index) { return this.books[index]; };
}]);