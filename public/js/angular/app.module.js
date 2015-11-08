(function() {
  'use strict';

  angular.module('icecreamTown', [
    'ngRoute',
    'icecreamTown.icecreams'
    ])
  .config(configRoutes);

  configRoutes.$inject = ['$routeProvider'];

  function configRoutes($routeProvider) {
    $routeProvider
      .otherwise({redirectTo: '/'});
  }
})();