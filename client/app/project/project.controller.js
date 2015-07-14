'use strict';

angular.module('projectManagerApp')
  .controller('ProjectCtrl', function ($scope, $http, $routeParams, socket, Modal, Upload, Auth) {
  
    $scope.templates = [];
  
    $http.get('/api/projects/' + $routeParams.id).success(function(project) {
      $scope.project = project;
      socket.syncUpdates('project', $scope.project);
      getTemplates();
    });
	
    $http.get('/api/logs/project/' + $routeParams.id).success(function(logs) {
      $scope.logs = logs;
      socket.syncUpdates('log', $scope.logs);
    });

    $scope.addTemplate = function(valid) {
      if(valid === true) {
        $http.post('/api/templates', { projectId: $scope.project._id, name: $scope.newTemplate });
				$http.post('/api/logs', {itemPageId: $routeParams.id, itemObjectType: 'project', itemType: 'template', action: 'added', user: Auth.getCurrentUser()._id, userName: Auth.getCurrentUser().name, actionValue: $scope.newTemplate});
				$scope.newTemplate = '';
      }
    };
  
    $scope.updateTemplate = function(template) {
      $http.put('/api/templates/' + template._id, template);
    };
  
    $scope.getStatus = function(template) {
      return template.complete === true ? 'success' : '';
    };

    $scope.deleteTemplate = Modal.confirm.delete(function(template) {
      $http.delete('/api/templates/' + template._id);
			$http.post('/api/logs', {itemPageId: $routeParams.id, itemObjectType: 'project', itemType: 'template', action: 'deleted', user: Auth.getCurrentUser()._id, userName: Auth.getCurrentUser().name, actionValue: template.name});
    });
  
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

    $scope.upload = function (template, files) {
        if (files && files.length) {
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
								upload(template, file);
            }
        }
    };
	
		var upload = function(template, file) {
			Upload.upload({
					url: 'api/templates/upload/' + template._id,
					fields: {'templateName': template.name, 'templateFile': file.name},
					file: file
			}).progress(function (evt) {
					var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
					console.log('progress: ' + progressPercentage + '% ' + evt.config.file.name);
			}).success(function (data, status, headers, config) {
					console.log('file ' + config.file.name + 'uploaded. Response: ' + data);
			}).error(function (data, status) {
					console.log('error status: ' + status);
			});
		};

    var getTemplates = function() {
      $http.get('/api/templates/project/' + $routeParams.id).success(function(templates) {
        $scope.project.templates = templates;
      	socket.syncUpdates('template', $scope.project.templates);
      });
    };
  
  });