// public/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })
        .when('/enterLocation', {
            templateUrl: 'views/enterLocation.html',
            controller: 'LocationController'
        });
      

    $locationProvider.html5Mode(true);

}]);