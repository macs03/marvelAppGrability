import angular from 'angular';
import 'angular-toastr';
import 'angular-toastr/dist/angular-toastr.min.css';
import 'angular-loading-bar';
import 'angular-loading-bar/build/loading-bar.min.css';

import {
  commonsModule
} from './app/commons/index';
import {
  charactersModule
} from './app/characters/index';
import {
  favoritesModule
} from './app/favorites/index';

import CharacterService from './app/characters/character.service';

import 'angular-ui-router';
import routesConfig from './routes';
import loadingBar from './configLoadingBar';
import toastr from './configToastr';

import {
  main
} from './app/main';

import './index.scss';

angular
  .module('app', [commonsModule, charactersModule, favoritesModule, 'ui.router', 'toastr', 'angular-loading-bar'])
  .config(routesConfig)
  .config(loadingBar)
  .config(toastr)
  .component('app', main)
  .service('CharacterService', CharacterService);
