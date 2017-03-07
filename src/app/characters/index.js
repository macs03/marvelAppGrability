import angular from 'angular';

import {
  characters
} from './characters';

export const charactersModule = 'characters';

angular
  .module(charactersModule, [])
  .component('characters', characters);
