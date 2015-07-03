'use strict';

angular.module('projectManagerApp')
  .controller('ProjectCtrl', function ($scope, $http, $routeParams, socket) {
    $http.get('/api/projects/' + $routeParams.id).success(function(project) {
      $scope.project = project;
      socket.syncUpdates('project', $scope.project);
      getTemplates();
    });

    $scope.addTemplate = function(valid) {
      console.log(valid);
      if(valid === true) {
        $http.post('/api/templates', { projectId: $scope.project._id, name: $scope.newTemplate });
        $scope.newTemplate = '';
        getTemplates();
      }
    };
  
    $scope.updateTemplate = function(template) {
      $http.put('/api/templates/' + template._id, template);
    };
  
    $scope.getStatus = function(template) {
      return template.complete === true ? 'success' : '';
    };

    var getTemplates = function() {
      $http.get('/api/templates/project/' + $routeParams.id).success(function(templates) {
        $scope.project.templates = templates;
        socket.syncUpdates('templates', $scope.templates);
      });
    };
  
  });