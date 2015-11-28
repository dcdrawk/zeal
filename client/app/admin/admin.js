'use strict';

angular.module('zealAppApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/admin/admin.html',
        controller: 'AdminCtrl'
      })
      .state('users', {
        url: '/admin/users',
        templateUrl: 'app/admin/views/users.html',
        controller: 'AdminCtrl'
      });
  });