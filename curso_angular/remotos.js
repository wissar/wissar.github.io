angular.module('myApp', [])
    .controller('myController', function($scope, $http) {
        $http({
            method: 'GET',
            url: 'https://restcountries.eu/rest/v1/all'
        }).then(function(obj) {
            //console.log('Ciudad: ' + obj.data[0].name + 'Capital: ' + obj.data[0].capital);
            $scope.cities = obj.data;
        }, function(error) {
            console.log(error);
        })
        $scope.city = {};
        $scope.show = function(city) {
            $scope.city = city;
        }
    })
