'use strict';

angular.module('projectManagerApp')
  .controller('ProjectCtrl', function ($scope, $http, $routeParams, socket) {
    $http.get('/api/projects/' + $routeParams.id).success(function(project) {
      $scope.project = project;
      socket.syncUpdates('project', $scope.project);
      getTemplates();
    });

    var getTemplates = function() {
      $http.get('/api/templates/project/' + $routeParams.id).success(function(templates) {
        $scope.project.templates = templates;
        socket.syncUpdates('templates', $scope.templates);
      });
    };

    $scope.addTemplate = function() {
      if($scope.newTemplate === '') {
        return;
      }
      $http.post('/api/templates', { projectId: $scope.project._id, name: $scope.newTemplate });
      $scope.newTemplate = '';
      getTemplates();
    };
  
  });