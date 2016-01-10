angular.module('myApp', ['lumx', 'firebase'])
    .controller('ctrlChat', function($scope, $firebaseArray, LxNotificationService) {
        var ref = new Firebase('https://wissar-chat.firebaseio.com');
        $scope.messages = $firebaseArray(ref);
        console.log($scope.messages);
        $scope.sendMessage = function() {
            if ($scope.user.message) {
            	var user = $scope.user.name || 'Piter la anguila';
                $scope.messages.$add({
                    from: user,
                    body: $scope.user.message
                });
            }
            $scope.user.message = '';
        }

        $scope.messages.$watch(function(data){
        	console.log(data);
        	var message = $scope.messages.$getRecord(data.key);
        	console.log(message.from);
        	LxNotificationService.notify('Mensaje nuevo de: ' + message.from);
        })
    })
