class DefaultModalController {
  constructor() {
    console.log('ready');
  }

  addFav(comic) {
    console.log('add to favorites');
    console.log(comic);
  }

}

export const defaultModal = {
  bindings: {
    comic: '<'
  },
  controller: DefaultModalController,
  templateUrl: 'app/favorites/default.html'
};
