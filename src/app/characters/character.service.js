class CharacterService {
  constructor($http, $q, $window, $rootScope) {
    this.$http = $http;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.$window = $window;
    const navigatorLang = window.navigator.language;
    const lang = navigatorLang.split('-');
    this.navigatorLang = lang[0];
  }

  getConfig() {
    const deferred = this.$q.defer();

    if (this.$rootScope.config && this.$rootScope.config.api_url) {
      deferred.resolve(this.$rootScope.config);
    }

    this.$http.get('config.json').then(response => {
      const config = response.data;
      this.$window.document.title = config.title;
      this.$rootScope.config = config;
      deferred.resolve(config);
    });

    return deferred.promise;
  }


  getCharacters(page) {
    const defered = this.$q.defer();
    const promise = defered.promise;

    this.getConfig().then(config => {
      this.$http({
        method: 'GET',
        url: `${config.api_url}characters?${config.ts}&${config.user_key}&${config.hash_key}&limit=10&offset=${page}`
      })
        .then(
        data => {
          defered.resolve(data);
        },
        err => {
          defered.reject(err);
        }
        );
    });

    return promise;
  }

  getCharactersByName(page, query) {
    const defered = this.$q.defer();
    const promise = defered.promise;

    this.getConfig().then(config => {
      this.$http({
        method: 'GET',
        url: `${config.api_url}characters?${config.ts}&${config.user_key}&${config.hash_key}&limit=10&offset=${page}&nameStartsWith=${query}`
      })
        .then(
        data => {
          defered.resolve(data);
        },
        err => {
          defered.reject(err);
        }
        );
    });

    return promise;
  }

  getComic(comic) {
    const defered = this.$q.defer();
    const promise = defered.promise;

    this.getConfig().then(config => {
      this.$http({
        method: 'GET',
        url: `${comic}?${config.ts}&${config.user_key}&${config.hash_key}`
      })
        .then(
        data => {
          defered.resolve(data);
        },
        err => {
          defered.reject(err);
        }
        );
    });

    return promise;
  }

}

CharacterService.$inject = ['$http', '$q', '$window', '$rootScope'];

export default CharacterService;
