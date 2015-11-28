'use strict';

angular.module('zealAppApp')
	.config(function($mdThemingProvider) {
	$mdThemingProvider.theme('default')
		.primaryPalette('blue-grey')
		.accentPalette('blue');
});