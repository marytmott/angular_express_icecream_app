(function() {
  'use strict';

  angular.module('iceCreamTown', [
    'ngRoute',
    'iceCreamTown.iceCreams'
    ])
  .config(configRoutes);

  configRoutes.$inject = ['$routeProvider'];

  function configRoutes($routeProvider) {
    $routeProvider
      .otherwise({redirectTo: '/'});
  }
})();