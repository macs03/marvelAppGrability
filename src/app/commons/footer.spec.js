import angular from 'angular';
import 'angular-mocks';
import {
    footer
} from './footer';

describe('footer component', () => {
    beforeEach(() => {
        angular
            .module('appFooter', ['app/commons/footer.html'])
            .component('footerApp', footer);
        angular.mock.module('appFooter');
    });

    it('should render \'Grability 2017 - Todos los reservados\'', angular.mock.inject(($rootScope, $compile) => {
        const element = $compile('<footer-app></footer-app>')($rootScope);
        $rootScope.$digest();
        const footer = element.find('span');
        expect(footer.html().trim()).toEqual('Grability 2017 - Todos los reservados');
    }));
});