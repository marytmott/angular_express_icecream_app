(function() {
  'use strict';

  angular.module('iceCreamTown.iceCream')
    .controller('IceCreamController', IceCreamController);

  IceCreamController.$inject = ['$routeParams', '$route', 'IceCreamFactory'];

  function IceCreamController($routeParams, $route, IceCreamFactory) {
    var vm = this;
    var iceCreamId = $routeParams.icecream;
    vm.updateIceCream = updateIceCream;

    (function getIceCream() {
      return IceCreamFactory.getIceCream(iceCreamId).then(findData);

      function findData(data) {
        vm.iceCream = data.data;
      }
    })();

    function updateIceCream(iceCream) {
      console.log(iceCream);
      var url = '/icecreams/' + iceCreamId;
      IceCreamFactory.updateIceCream(iceCreamId, iceCream);
      $route.reload();
    }
  }
})();