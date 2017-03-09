export default loadingBar;

function loadingBar(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
}
loadingBar.$inject = ['cfpLoadingBarProvider'];
