'use strict';

angular.module('projectManagerApp')
  .directive('editable', function () {
    return {
      templateUrl: 'components/editable/editable.html',
      restrict: 'E',
      scope:{
      	type:"@?type",
      	value:"=?value",
      	onEdit: "&?onEdit",
      },
      // compile: function(element, attrs){
      //  if (!attrs.type) { attrs.type = 'text'; }
      //  if (!attrs.value) { attrs.value = ''; }
      //  if (!attrs.onEdit) { attrs.onEdit = '' }
      // },
      link: function(scope, elem, attrs) {
		  scope.readOnly= true;
		  scope.switch = function(){
		  	if(!scope.readOnly)
		  	{
		  		scope.onEdit();
		  	};
		  	scope.readOnly =!scope.readOnly;
		  };
		  
		  //scope.value = value;
		  
		}
      }
  });