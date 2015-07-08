'use strict';

angular.module('projectManagerApp')
  .directive('editable', function () {
    return {
      templateUrl: 'components/editable/editable.html',
      restrict: 'E',
      scope:{
      	type: '@?type',
      	value: '=?value',
      	onEdit: '&?onEdit',
      },
      link: function(scope) {
		  scope.readOnly= true;
		  scope.switch = function() {
				if(!scope.readOnly) {
					scope.onEdit();
				}
				scope.readOnly =!scope.readOnly;
			};		  
		}
	};
});