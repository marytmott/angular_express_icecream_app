(function() {
  'use strict';

  angular.module('icecreamTown.icecreams')
    .config(configRoutes);

  configRoutes.$inject = ['$routeProvider'];

  function configRoutes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/icecreams/index.html',
        controller: 'IcecreamsController',
        controllerAs: 'vm'
      })
      .when('/:icecream', {
        templateUrl: '/views/icecreams/show.html',
        controller: 'IcecreamsController',
        controllerAs: 'vm'
      });
  }


})();

//add locationProvider..html5mode
