class FavoriteController {
  constructor() {
    this.favorites = [];
    this.getFavorites();
  }

  getFavorites() {
    this.favorites = JSON.parse(localStorage.getItem('favorites_marvel'));
    console.log(this.favorites)
  }

  deleteFavorite() {

  }

}

export const favorite = {
  controller: FavoriteController,
  templateUrl: 'app/favorites/favorite.html'
};
