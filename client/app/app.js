'use strict';

angular.module('simpleBlog2App', ['simpleBlog2App.auth', 'simpleBlog2App.admin',
    'simpleBlog2App.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ngRoute',
    'validation.match'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
