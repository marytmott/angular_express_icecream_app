(function() {
  'use strict';

  angular.module('iceCreamTown.iceCream')
    .config(configRoutes);

  configRoutes.$inject = ['$routeProvider'];

  function configRoutes($routeProvider) {
    $routeProvider
      .when('/:icecream', {
        templateUrl: '/views/iceCreams/show.html',
        controller: 'IceCreamController',
        controllerAs: 'vm'
      });
  }
})();