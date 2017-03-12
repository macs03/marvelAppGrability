import angular from 'angular';

class DefaultModalController {
  constructor($rootScope, toastr) {
    console.log('ready');
    this.$rootScope = $rootScope;
    this.toastr = toastr;
  }

  addFav(comic) {
    console.log('add to favorites');
    console.log(comic);
    let flag = false;
    const favorites = JSON.parse(localStorage.getItem('favorites_marvel'));
    if (favorites) {
      console.log('chequeamos si existe y guardamos');
      angular.forEach(favorites, value => {
        if (comic.id === value.id) {
          flag = true;
        }
      });
      if (flag) {
        console.info('Ya existe el comic en favoritos');
      } else {
        console.log('guardamos');
        favorites.push(comic);

        console.log(favorites);
        localStorage.setItem('favorites_marvel', JSON.stringify(favorites));
        this.$rootScope.$broadcast('refreshEvent', true);
        this.toastr.success('Comic saved like Favorite');
      }
    } else {
      console.log('se agrega de one');
      const comicSave = [];
      comicSave[0] = comic;
      localStorage.setItem('favorites_marvel', JSON.stringify(comicSave));
      this.$rootScope.$broadcast('refreshEvent', true);
      this.toastr.success('Comic saved like Favorite');
    }
  }

}

DefaultModalController.$inject = ['$rootScope', 'toastr'];

export const defaultModal = {
  bindings: {
    comic: '<',
    flag: '<',
    index: '<'
  },
  controller: DefaultModalController,
  templateUrl: 'app/favorites/default.html'
};
