'use strict';

/* Directives */


angular.module('CSULA-MOOC-App.directives', []).
  directive('appVersion', ['version', function(version) {
    return function(scope, elm, attrs) {
      elm.text(version);
    };
  }]).
  directive('codeHighlight', function() {
  	return {
  		restrict: 'A',
  		link:function(scope, elem, attrs) {
  			elem.html(prettyPrintOne(elem.html(), undefined, true));
  		}
  	}
  });
