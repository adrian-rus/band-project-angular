angular.module('bandDirectives',[])
.directive('bandNav', function(){
	return {
		restrict: 'E',
		scope:{
			band: '=nav'
		},
		templateUrl: 'templates/directives/nav.html'
	}
})
.directive('bandFooter', function(){
  return {
    restrict: 'E',
    scope:{
      band: '=footer'
    },
    templateUrl: 'templates/directives/footer.html'
  }
})
.directive('bandFooter', function(){
  return {
    restrict: 'E',
    scope:{
      band: '=home'
    },
    templateUrl: 'templates/home.html'
  }
});