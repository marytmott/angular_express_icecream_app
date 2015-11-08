(function() {
  'use strict';

  angular.module('iceCreamTown.iceCreams')
    .config(configRoutes);

  configRoutes.$inject = ['$routeProvider'];

  function configRoutes($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/iceCreams/index.html',
        controller: 'IceCreamsController',
        controllerAs: 'vm'
      })
      .when('/:icecream', {
        templateUrl: '/views/iceCreams/show.html',
        controller: 'IceCreamsController',
        controllerAs: 'vm'
      });
  }


})();

//add locationProvider..html5mode
