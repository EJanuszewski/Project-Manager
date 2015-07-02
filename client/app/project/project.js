'use strict';

angular.module('projectManagerApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/project/:id', {
        templateUrl: 'app/project/project.html',
        controller: 'ProjectCtrl',
        caseInsensitiveMatch: true
      })
  });
