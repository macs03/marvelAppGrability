import angular from 'angular';

class CharacterController {
  constructor(CharacterService, $scope, $rootScope) {
    this.CharacterService = CharacterService;
    this.$rootScope = $rootScope;
    this.getCharacters();
    this.page = 0;
    this.flag = false;

    const self = this;
    function changeView(ev, query) {
      console.log(query);
      self.getCharactersByName(query);
    }
    $scope.$on('sendQuery', changeView);

    function home(ev, flag) {
      console.log(flag);
      self.getCharacters();
    }
    $scope.$on('goHome', home);
  }

  getCharacters() {
    this.CharacterService.getCharacters(this.page)
      .then(data => {
        console.log(data.data.data.results);
        this.characterData = data.data.data.results;
      })
      .catch(err => {
        console.log(err);
      });
  }

  changePage(page) {
    console.log(`cambiamos de pagina a ${page}`);
    this.CharacterService.getCharacters(page)
      .then(data => {
        console.log(data.data.data.results);
        this.characterData = data.data.data.results;
      })
      .catch(err => {
        console.log(err);
      });
  }

  getCharactersByName(query) {
    this.CharacterService.getCharactersByName(this.page, query)
      .then(data => {
        console.log(data.data.data.results);
        this.characterData = data.data.data.results;
      })
      .catch(err => {
        console.log(err);
      });
  }

  bringComic(comic, random) {
    console.log(`llamamos a ${comic} ${random}`);
    const comicsFav = JSON.parse(localStorage.getItem('favorites_marvel'));
    console.log(comicsFav);
    this.flag = false;

    this.CharacterService.getComic(comic)
      .then(data => {
        console.log(data.data.data.results[0]);
        this.comicDetail = data.data.data.results[0];
        angular.forEach(comicsFav, value => {
          if (this.comicDetail.id === value.id) {
            console.log('existe en favs');
            this.flag = true;
          }
        });
        if (random) {
          this.addFav(this.comicDetail);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  showComics(index) {
    console.log(index);
    this.index = index;
  }

  randomComics(comicList) {
    console.log('add 3 comics to favorites random way');
    console.log(comicList);
    const totalNumbers = 3;
    const myArray = [];
    while (myArray.length < totalNumbers) {
      const randomNumber = (Math.ceil(Math.random() * comicList.length)) - 1;
      let exist = false;
      for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === randomNumber) {
          exist = true;
          break;
        }
      }
      if (!exist) {
        myArray[myArray.length] = randomNumber;
      }
    }

    for (let i = 0; i < myArray.length; i++) {
      console.log(comicList[myArray[i]]);
      this.bringComic(comicList[myArray[i]].resourceURI, true);
    }
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

CharacterController.$inject = ['CharacterService', '$scope', '$rootScope'];

export const characters = {
  templateUrl: 'app/characters/characters.html',
  controller: CharacterController
};
