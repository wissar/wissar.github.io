angular.module('myApp', ['ngRoute', 'formly'])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'mainController'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'aboutController'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'contactController as cr'
            })
            .when('/countries', {
                templateUrl: 'views/countries.html',
                controller: 'countriesController'
            })
            .when('/detail', {
                templateUrl: 'views/detail.html',
                controller: 'detailController'
            })
            .when('/404', {
                templateUrl: 'views/404.html',
            })
            .otherwise({
                redirectTo: '/404'
            })
    })
    .factory('countryService', function($rootScope, $http) {
        var result = {};
        var sample = {};
        sample.name = "Peter la anguila";
        result.Sample = sample;
        var cities = {};
        result.Loading = true;
        $http({
            method: 'GET',
            url: 'https://restcountries.eu/rest/v1/all'
        }).then(function(obj) {
            cities = obj.data;
            result.Cities = cities;
            result.Loading = false;
            $rootScope.$broadcast('loaded');
        }, function(error) {
            console.log(error);
        })
        result.alert = function(){
            alert('Kappita');
        }
        return result;

    })
    .directive('buttonAlert', function () {
        return {
            restrict: 'A',
            replace: true,
            template: '<button ng-click="alert()">Alerta</button>'
        };
    })
    .controller('mainController', function($scope, countryService) {
        $scope.message = 'Bienvenidos al sitio ' + countryService.Sample.name;
        $scope.alert = countryService.alert;
    })
    .controller('aboutController', function($scope) {
        $scope.message = 'Aqui va el about';
    })
    .controller('contactController', function($scope) {
        var cr = this;
        cr.model = {};
        cr.userData = [{
            key: 'fullName',
            type: 'input',
            templateOptions: {
                label: 'Nombre completo',
                placeholder: 'Escribe tu nombre completo'
            }
        }];
    })
    .controller('countriesController', function($scope, $location, countryService) {
        $scope.cities = countryService.Cities;
        $scope.loading = countryService.Loading;
        $scope.city = {};

        $scope.show = function(city) {
            $scope.city = city;
        }

        $scope.showDetail = function(detail) {
            countryService.Sample.name = detail.name;
            countryService.City = detail;
            $location.path('/detail');
        }

        $scope.$on('loaded', function() {
            $scope.cities = countryService.Cities;
            $scope.loading = countryService.Loading;
        })
    })
    .controller('detailController', function($scope, countryService) {
        $scope.city = countryService.City;
    })