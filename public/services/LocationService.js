// public/services/LocationService.js
angular.module('LocationService', []).factory('Location', ['$http', function($http) {

    return {
        // call to get all locations
        get : function() {
            return $http.get('/locations');
        },


                
        // call to POST and create a new location
        create : function(locationData) {
            return $http.post('/locations', locationData);
        },

        // call to DELETE a location
        delete : function(id) {
            return $http.delete('/locations' + id);
        }
    }       

}]);