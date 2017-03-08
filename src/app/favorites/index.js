import angular from 'angular';

import {
  favorite
} from './favorite';

export const favoritesModule = 'favorites';

angular
  .module(favoritesModule, [])
  .component('favorite', favorite);
