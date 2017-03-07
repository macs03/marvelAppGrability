import angular from 'angular';

import {
  commonsModule
} from './app/commons/index';
import {
  charactersModule
} from './app/characters/index';

import 'angular-ui-router';
import routesConfig from './routes';

import {
  main
} from './app/main';

import './index.scss';

angular
  .module('app', [commonsModule, charactersModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main);
