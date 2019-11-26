'use strict';
var formApp = angular.module('formApp',['ngRoute'] )
 	
.config(function($routeProvider, $locationProvider){
	$routeProvider.
	when('/',  {
		templateUrl:'/views/fibonacci.html',
		controller:'fibonacci'
		})

});			

