var myApp = angular.module('myApp', []);

myApp.controller('AppController', ['$scope', '$http', function($scope, $http){
    console.log('AppController Initialized...');
    
    $scope.getAirports = function(){
        //had to change .success to .then .success no longer supported
        $http.get('/api/airports').then(function(response){
            $scope.airports = response;
        });
    }
    
    $scope.findAirports = function(){
        //had to change .success to .then .success no longer supported
        $http.get('/api/airports/state/'+$scope.stateCode).then(function(response){
            $scope.airports = response;
        });
    }
    
    $scope.findAirportsByProx = function(){
        var location = {
            distance: $scope.location.distance
        }
        //had to change .success to .then .success no longer supported
        $http.get('/geocode/location?address='+$scope.location.address).then(function(loc_response){
            location.lat = loc_response.locations[0].latitude
            location.llon = loc_response.locations[0].longitude
            
            $http.post('/api/airports/prox', location).then(function(response){
                $scope.airports = response;
            });
        });
    }
}]);