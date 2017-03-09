class HeaderController {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }

  sendQuery() {
    console.log(this.query);
    this.$rootScope.$broadcast('sendQuery', this.query);
  }

}

HeaderController.$inject = ['$rootScope'];

export const headerApp = {
  controller: HeaderController,
  templateUrl: 'app/commons/header.html'
};
