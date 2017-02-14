var app=angular.module('mathApp', [])
    .controller('mathCtrl', function($scope) {
        $scope.AddNumbers = function() {
            var a = Number($scope.a || 0);
            var b = Number($scope.b || 0);
            $scope.result = (a*a)+(b*b)+(2*a*b)
        }
});