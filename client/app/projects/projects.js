'use strict';

angular.module('projectManagerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/projects', {
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsCtrl'
      });
  });
