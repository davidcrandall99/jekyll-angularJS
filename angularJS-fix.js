	var app = angular.module('myApp', [], function($newSymbol) {
		$newSymbol.startSymbol('[[');
		$newSymbol.endSymbol(']]');
	});