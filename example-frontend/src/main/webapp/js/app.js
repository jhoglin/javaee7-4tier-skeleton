var exampleApp = angular.module('exampleApp', []);

exampleApp.controller("MainController", function($scope, $http) {
	
	
	$scope.submit = submit;
	$scope.remove = remove;
	$scope.form = {};
	
	refresh();
	
	
	/******/
	
	function refresh() {
		$http.get("api/example").success(function(data){
			$scope.items = data
		});
	}
	
	function submit() {
		$http.post("api/example", $scope.form.text).success(function(){
			refresh();
		});
		
	}
	
	function remove(id) {
		$http.delete("api/example/"+id).success(function(){
			refresh();
		});
		
	}

});