'use strict';

describe('Directive: editable', function () {

  // load the directive's module and view
  beforeEach(module('projectManagerApp'));
  beforeEach(module('components/editable/editable.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make element', inject(function ($compile) {
    element = angular.element('<editable></editable>');
    element = $compile(element)(scope);
    scope.$apply();
  }));
});