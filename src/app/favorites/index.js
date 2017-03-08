import angular from 'angular';

import {
  favorite
} from './favorite';
import {
  defaultModal
} from './default';

export const favoritesModule = 'favorites';

angular
  .module(favoritesModule, [])
  .component('favorite', favorite)
  .component('defaultModal', defaultModal);
