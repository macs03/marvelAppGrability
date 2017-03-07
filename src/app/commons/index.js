import angular from 'angular';

import {
    footerApp
} from './footer';
import {
    headerApp
} from './header';

export const commonsModule = 'commons';

angular
    .module(commonsModule, [])
    .component('footerApp', footerApp)
    .component('headerApp', headerApp);
