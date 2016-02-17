// public/controllers/MainCtrl.js

angular.module('MainCtrl', ['gservice']).controller('MainController', function($http, $scope, gservice) {
  
  $scope.data = {};

  var getLocations = function () {
    $http.get('/locations')
            .success(function (data) {
                $scope.data.locations = data;        
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
  };

  getLocations();

});
