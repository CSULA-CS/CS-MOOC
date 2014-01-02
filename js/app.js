'use strict';


// Declare app level module which depends on filters, and services
angular.module('CSULA-MOOC-App', ['ngRoute', 'ngAnimate', 'CSULA-MOOC-App.services', 'ui.bootstrap', 'googlechart', 'CSULA-MOOC-App.directives']).
  config(['$routeProvider', function($routeProvider) {
  	$routeProvider.when(
	    	'/syllabus',
	    	{
	    		templateUrl: 'partials/syllabus.html'
	    	}
    	);
    $routeProvider.when(
	    	'/class',
	    	{
	    		templateUrl: 'partials/class.html'
	    	}
    	);
    $routeProvider.otherwise(
	    	{
	    		redirectTo: '/class'
	    	}
    	);
  }]);
