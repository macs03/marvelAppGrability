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

}

CharacterController.$inject = ['CharacterService'];

export const characters = {
  templateUrl: 'app/characters/characters.html',
  controller: CharacterController
};
