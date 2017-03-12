import angular from 'angular';

class CharacterController {
  constructor(CharacterService, $scope) {
    this.CharacterService = CharacterService;

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


  bringComic(comic) {
    console.log(`llamamos a ${comic}`);
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
      })
      .catch(err => {
        console.log(err);
      });
  }

  showComics(index) {
    console.log(index);
    this.index = index;
  }

}

CharacterController.$inject = ['CharacterService', '$scope'];

export const characters = {
  templateUrl: 'app/characters/characters.html',
  controller: CharacterController
};
