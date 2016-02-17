// public/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/enterLocation.html',
            controller: 'LocationController'
        }).when('/list', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        });
      

    $locationProvider.html5Mode(true);

}]);