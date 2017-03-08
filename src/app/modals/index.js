import angular from 'angular';

import {
  defaultModal
} from './default';

export const modalsModule = 'commons';

angular
  .module(modalsModule, [])
  .component('defaultModal', defaultModal);
