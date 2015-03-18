function tempController($scope) {
  
  $scope.flagInput = function(CorF) {
    $scope.input = CorF;
  };
  
  $scope.$watch('celsius', function(temp) {
    if ($scope.input == 'C') {
      $scope.fahrenheit = temp * 9/5 + 32;
    }
  });
  
  $scope.$watch('fahrenheit', function(temp) {
    if ($scope.input == 'F') {
      $scope.celsius = (temp - 32) * 5/9;
    }
  });
  
}