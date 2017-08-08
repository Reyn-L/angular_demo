/*jshint esversion: 6*/
angular.module('myApp')
.provider('Movies', function() {
  this.movies = [];

  this.$get = ['$http', function($http) {
    return {
      getMovies: function() {
        return $http.get('/api/movies')
        .then((movies) => {
          console.log(movies);
          return movies.data;
        });
      }
    };
  }];
});