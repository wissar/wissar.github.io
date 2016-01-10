angular.module('myApp', ['lumx', 'firebase'])
    .controller('ctrlChat', function($scope, $firebaseArray) {
        var ref = new Firebase('https://wissar-chat.firebaseio.com');
        $scope.messages = $firebaseArray(ref);
        console.log($scope.messages);
        $scope.sendMessage = function() {
            if ($scope.user.message) {
                $scope.messages.$add({
                    from: $scope.user.name,
                    body: $scope.user.message
                });
            }
        }
    })
