import angular from 'angular';

class CharacterController {
  constructor(CharacterService) {
    this.CharacterService = CharacterService;

    this.getCharacters();
    this.page = 0;
    this.flag = false;
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

  bringComic(comic) {
    console.log(`llamamos a ${comic}`);
    const comicsFav = JSON.parse(localStorage.getItem('favorites_marvel'));
    console.log(comicsFav);

    this.CharacterService.getComic(comic)
      .then(data => {
        console.log(data.data.data.results[0]);
        this.comicDetail = data.data.data.results[0];
        angular.forEach(comicsFav, value => {
          if (this.comicDetail.id === value.id) {
            console.log('existe en favs');
            this.flag = true;
          } else {
            this.flag = false;
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

}

CharacterController.$inject = ['CharacterService'];

export const characters = {
  templateUrl: 'app/characters/characters.html',
  controller: CharacterController
};
