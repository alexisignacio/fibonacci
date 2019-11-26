'use strict';

formApp.controller('fibonacci', ['$scope','$http','$location',function fibonacci($scope, $http, $location){
		$scope.get_serie = function(){
			 $http.get('/get_fibonacci/'+$scope.numero).success(function(data){

			 	$scope.serie_fibonacci = data
			 	console.log(data)
			})
		}
		

}]);
