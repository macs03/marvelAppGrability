import angular from 'angular';

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

import {
  main
} from './app/main';

import './index.scss';

angular
  .module('app', [commonsModule, charactersModule, favoritesModule, 'ui.router'])
  .config(routesConfig)
  .component('app', main)
  .service('CharacterService', CharacterService);
