// public/controllers/LocationCtrl.js

angular.module('LocationCtrl', ['gservice']).controller('LocationController', function($scope, $http, gservice) {

    $scope.formData = {};
    var coords = {};
    var lat = 0;
    var long = 0;

    $scope.formData.latitude = 37.773972;
    $scope.formData.longitude = -122.431297;
 
    $scope.createLocation = function() {

        // Grabs all of the text box fields
        var LocationData = {
            place: $scope.formData.place,
            description: $scope.formData.description,
            //location: [$scope.formData.longitude, $scope.formData.latitude],
        };

        // Saves the user data to the db
        $http.post('/locations', locationData)
            .success(function (data) {

                // Once complete, clear the form (except location)
                $scope.formData.place = "";
                $scope.formData.description = ""; 

                gservice.refresh(-25.363, 131.044);            
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

});
