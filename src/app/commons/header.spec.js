import angular from 'angular';
import 'angular-mocks';
import {
  headerApp
} from './header';

describe('header component', () => {
  beforeEach(() => {
    angular
      .module('headerApp', ['app/commons/header.html'])
      .component('headerApp', headerApp);
    angular.mock.module('headerApp');
  });

  it('should render a form', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<header-app></header-app>')($rootScope);
    $rootScope.$digest();
    expect(element.find('form').length).toEqual(1);
  }));
});

