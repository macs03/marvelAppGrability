import angular from 'angular';

import {
  commonsModule
} from './app/commons/index';
import 'angular-ui-router';
import routesConfig from './routes';

import {
  main
} from './app/main';

import './index.scss';

angular
  .module('app', [commonsModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main);
