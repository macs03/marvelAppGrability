class FavoriteController {
  constructor($rootScope, $scope, toastr) {
    this.favorites = [];
    this.$rootScope = $rootScope;
    this.toastr = toastr;
    this.getFavorites();
    const self = this;
    function changeView(ev, flag) {
      console.log(flag);
      if (flag) {
        self.getFavorites();
      }
    }
    $scope.$on('refreshEvent', changeView);
  }

  getFavorites() {
    this.favorites = JSON.parse(localStorage.getItem('favorites_marvel'));
    console.log(this.favorites);
  }

  deleteFavorite(id) {
    console.log(id);
    if (id > -1) {
      this.favorites.splice(id, 1);
      this.toastr.success('Comic Deleted');
    }
    localStorage.setItem('favorites_marvel', JSON.stringify(this.favorites));
    this.getFavorites();
  }

}

FavoriteController.$inject = ['$rootScope', '$scope', 'toastr'];

export const favorite = {
  controller: FavoriteController,
  templateUrl: 'app/favorites/favorite.html'
};
