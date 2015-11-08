(function() {
  'use strict';

  angular
    .module('taylor')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController as mainCtrl',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
