'use strict';

angular.module('projectManagerApp')
  .controller('ProjectsCtrl', function ($scope, $http, socket, Modal) {
  
    $scope.projects = [];

    $http.get('/api/projects').success(function(projects) {
      $scope.projects = projects;
      socket.syncUpdates('project', $scope.projects);
    });

    $scope.addProject = function() {
      if($scope.newProject === '') {
        return;
      }
      $http.post('/api/projects', { name: $scope.newProject });
      $scope.newProject = '';
    };

    $scope.deleteProject = Modal.confirm.delete(function(projectName, project) {
      $http.delete('/api/projects/' + project._id);        
    });
    
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('project');
    });
  
  });