var myApp = angular.module('myApp', []);

myApp.controller('AppController', ['$scope', '$http'], function($scope, $http){
    console.log('AppController Initialized...');
});