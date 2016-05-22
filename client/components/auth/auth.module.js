'use strict';

angular.module('simpleBlog2App.auth', ['simpleBlog2App.constants', 'simpleBlog2App.util',
    'ngCookies', 'ngRoute'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
