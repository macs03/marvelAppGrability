class CharacterController {
  constructor(CharacterService) {
    this.CharacterService = CharacterService;

    this.getCharacters();
    this.page = 0;
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
    this.CharacterService.getComic(comic)
      .then(data => {
        console.log(data.data.data.results[0]);
        this.comicDetail = data.data.data.results[0];
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
