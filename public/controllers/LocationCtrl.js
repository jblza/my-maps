// public/controllers/LocationCtrl.js

angular.module('LocationCtrl', ['gservice']).controller('LocationController', function($scope, $http, gservice, $rootScope) {

    $scope.formData = {};
    var coords = {};
    var lat = 0;
    var long = 0;

    $scope.formData.latitude = 37.773972;
    $scope.formData.longitude = -122.431297;

    $rootScope.$on("clicked", function(){

      // Run the gservice functions associated with identifying coordinates
        $scope.$apply(function(){
          $scope.formData.latitude = parseFloat(gservice.clickLat).toFixed(3);
          $scope.formData.longitude = parseFloat(gservice.clickLong).toFixed(3);
        });

    });
 
    $scope.createLocation = function() {

        // Grabs all of the text box fields
        var locationData = {
            place: $scope.formData.place,
            description: $scope.formData.description,
            location: [$scope.formData.longitude, $scope.formData.latitude],
        };

        // Saves the user data to the db
        $http.post('/locations', locationData)
            .success(function (data) {

                // Once complete, clear the form (except location)
                $scope.formData.place = "";
                $scope.formData.description = ""; 

                gservice.refresh(37.773972, -122.431297);            
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

});
