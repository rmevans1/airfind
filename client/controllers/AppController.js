var myApp = angular.module('myApp', []);

myApp.controller('AppController', ['$scope', '$http', function($scope, $http){
    console.log('AppController Initialized...');
    
    $scope.getAirports = function(){
        //had to change .success to .then .success no longer supported
        $http.get('/api/airports').then(function(response){
            $scope.airports = response;
        });
    }
}]);