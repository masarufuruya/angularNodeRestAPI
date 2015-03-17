'use strict';

/**
 * @ngdoc function
 * @name expressExapmleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the expressExapmleApp
 */
angular.module('expressExapmleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
