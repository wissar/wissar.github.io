angular.module('myApp', [])
    .controller('ctrlGreetings', function($scope, $filter) {
        $scope.name = "Abdel Posada";

        $scope.today = new Date();

        $scope.greeting = function() {
            alert("Greetings program!");
        }
        $scope.setLowerCase = $filter('lowercase')('PANCHO Pantera');

        $scope.isCapitalized = function(str) {
            var res = str[0] == str[0].toUpperCase();
            return res;
        }
    })
    .controller('myClock', function($scope) {
        $scope.clock = {
            now: new Date()
        }

        var updateClock = function() {
            $scope.clock.now = new Date();
        }

        setInterval(function() {
            $scope.$apply(updateClock);
        }, 1);
    })
    .controller('ctrlCalc', function($scope) {
        $scope.multiplicacion = function() {
            $scope.resultado = parseFloat($scope.num1) * parseFloat($scope.num2);
        }
        $scope.division = function() {
            $scope.resultado = parseFloat($scope.num1) / parseFloat($scope.num2);
        }
        $scope.resta = function() {
            $scope.resultado = parseFloat($scope.num1) - parseFloat($scope.num2);
        }
        $scope.suma = function() {
            $scope.resultado = parseInt(parseFloat($scope.num1)) + parseInt(parseFloat($scope.num2));
        }
        $scope.showData = function() {
        	console.log($scope.num1);
        }
    })
    .filter('blankIfNegative', function() {
        return function(input) {
            console.log(input);
            if (parseFloat(input) <= 0) {
                return 'NaN';
            } else {
                return input;
            }
        }
    })
    .filter('capitalize', function() {
        return function(input) {
            return input[0].toUpperCase() + input.slice(1);
        }
    })
    .directive('myLogin', function() {
        return {
            restrict: 'EAM',
            replace: true,
            scope: {
                userName: '@'
            },
            template: '\
    		<div>\
    				<div>Acceso de usuarios</div>\
    				<input type="text" value="{{userName}}" placeholder="Usuario..."/>\
    				<input type="text" placeholder="Password..."/>\
    				<button>Enviar</button>\
    		</div>\
    		'
        }
    })
