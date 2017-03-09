import angular from 'angular';

class DefaultModalController {
  constructor() {
    console.log('ready');
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
        favorites.push(JSON.stringify(comic));
        localStorage.setItem('favorites_marvel', favorites);
      }
    } else {
      console.log('se agrega de one');
      const comicSave = [];
      comicSave[0] = comic;
      localStorage.setItem('favorites_marvel', JSON.stringify(comicSave));
    }
  }

}

export const defaultModal = {
  bindings: {
    comic: '<',
    flag: '<'
  },
  controller: DefaultModalController,
  templateUrl: 'app/favorites/default.html'
};
