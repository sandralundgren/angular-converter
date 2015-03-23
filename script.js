angular.module('app', []).controller('myController', myController);

function myController($scope) {
  
  $scope.flagInput = function(which) {
    $scope.input = which;
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

    $scope.$watch('meters', function(value) {
    if ($scope.input == 'm') {
      $scope.feet = value * 3.2808399;
    }
  });
  
  $scope.$watch('ft', function(value) {
    if ($scope.input == 'ft') {
      $scope.meters = value / 3.2808399;
    }
  });
  
  $scope.$watch('kg', function(mass) {
    if ($scope.input == 'kg') {
      $scope.lbs = mass / 0.454
      $scope.lbs = +$scope.lbs.toFixed(3);
    }
  });
  
  $scope.$watch('lbs', function(mass) {
    if ($scope.input == 'lbs') {
      $scope.kg = mass * 0.454;
      $scope.kg = +$scope.kg.toFixed(3);
    }
  });
  
   $scope.$watch('hectares', function(area) {
    if ($scope.input == 'hectares') {
      $scope.acres = area * 2.47105
      $scope.acres = +$scope.acres.toFixed(5);
    }
  });
  
  $scope.$watch('acres', function(area) {
    if ($scope.input == 'acres') {
      $scope.hectares = area / 2.47105;
      $scope.hectares = +$scope.hectares.toFixed(5);
    }
  });
  
    $scope.$watch('litres', function(vol) {
    if ($scope.input == 'litres') {
      $scope.gallons = vol * 0.264172;
      $scope.gallons = +$scope.gallons.toFixed(5);
    }
  });
  
  $scope.$watch('gallons', function(vol) {
    if ($scope.input == 'gallons') {
      $scope.litres = vol / 0.264172;
      $scope.litres = +$scope.litres.toFixed(5);
    }
  });
  
    $scope.$watch('kph', function(speed) {
    if ($scope.input == 'kph') {
      $scope.mph = speed * 0.621371;
      $scope.mph = +$scope.mph.toFixed(5);
    }
  });
  
  $scope.$watch('mph', function(speed) {
    if ($scope.input == 'mph') {
      $scope.kph = speed / 0.621371;
      $scope.kph = +$scope.kph.toFixed(5);
    }
  });
  
}