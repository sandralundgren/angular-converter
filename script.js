angular.module('app', []).controller('tempController', tempController);

function tempController($scope) {
  
  $scope.flagInput = function(CorF) {
    $scope.input = CorF;
  };
  
  $scope.$watch('celsius', function(temp) {
    if ($scope.input == 'C') {
      $scope.fahrenheit = temp * 9/5 + 32;
      // No decimals
      $scope.fahrenheit =  +$scope.fahrenheit.toFixed(0);
    }
  });
  
  $scope.$watch('fahrenheit', function(temp) {
    if ($scope.input == 'F') {
      $scope.celsius = (temp - 32) * 5/9;
      // Only one decimal
      $scope.celsius =  +$scope.celsius.toFixed(1);
    }
  });
  
}