angular.module('bandControllers',[])
.controller('HomeController',function($scope) {
//
   $scope.title = 'Home';  
})
.controller('ErrorController',function($scope, $routeParams) {
//
   $scope.message = $routeParams.message;
   $scope.status = $routeParams.status;
})

.controller('NavController', function($scope){
  $scope.title='';
})
.controller('FooterController',function($scope){
  $scope.title='';
});