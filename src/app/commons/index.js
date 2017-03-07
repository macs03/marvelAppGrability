import angular from 'angular';

import {
    footerApp
} from './footer';

export const commonsModule = 'commons';

angular
    .module(commonsModule, [])
    .component('footerApp', footerApp);