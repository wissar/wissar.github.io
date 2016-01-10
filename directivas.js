angular.module('myApp', [])
    .run(function($rootScope, $timeout) {

        $timeout(function() {
            $rootScope.myLink = 'http://www.google.com';
            $rootScope.myImage = 'https://fbcdn-sphotos-e-a.akamaihd.net/hphotos-ak-xta1/v/t1.0-9/12509430_1128719297160906_6816847092040204813_n.jpg?oh=3124d40f7f555f2e39f5f14d24355620&oe=57117DE9&__gda__=1459537172_b3d34e8bf0f022d80ccb67abbbcdb23f';
        }, 3000);
    })
    .controller('myController', function($scope) {
        $scope.generarRandom = function() {
            $scope.random = Math.round(Math.random(10) * 10000);
        }

        $scope.cities = {
            availableOptions: [{
                name: 'Torreón'
            }, {
                name: 'México'
            }, {
                name: 'Parras'
            }, {
                name: 'Juárez'
            }, {
                name: 'Boston'
            }, {
                name: 'Graz'
            }, {
                name: 'Torreón'
            }, {
                name: 'Santo Domingo'
            }],
            selectedOption: {
                name: 'México'
            }
        };

        $scope.person = {
            name: null
        };
        $scope.people = [
        ];

        $scope.submit = function() {
            if ($scope.person.name) {
                $scope.people.push({
                    name: $scope.person.name
                })
                $animatescope.person.name = '';
            }
        }
    })
    .directive('myDirectives', [function() {
        return {
            restrict: 'A',
            link: function(scope, iElement, iAttrs) {

            }
        };
    }])
