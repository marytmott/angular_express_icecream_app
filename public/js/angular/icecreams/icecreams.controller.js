(function() {
  'use strict';

  angular.module('iceCreamTown.iceCreams')
    .controller('IceCreamsController', IceCreamsController);

  IceCreamsController.$inject = ['$location', '$route', 'IceCreamRequests'];

  function IceCreamsController($location, $route, IceCreamRequests) {
    var vm = this;
    vm.toggleForm = toggleForm;
    vm.addIceCream = addIceCream;
    vm.showForm = false;
    vm.iceCream = {};
    vm.goEdit = goEdit;
    vm.deleteIC = deleteIC;
    // vm.flavors = getFlavors;
    // console.log(vm.flavors);

    function toggleForm() {
      vm.showForm = !vm.showForm;
      // console.log(vm.showForm);
    }

    function addIceCream() {
      IceCreamRequests.postIceCream(vm.iceCream);
      $route.reload();
    }

    (function getFlavors() {
      return IceCreamRequests.getIceCreams().then(findData);

      function findData(data) {
        vm.flavors = data.data;
        // return data.data
      }
    })();

    function deleteIC(iceCream) {
      IceCreamRequests.deleteIceCream(iceCream._id);
      $route.reload();
    }

    function goEdit(iceCream) {
      $location.path('/' + iceCream._id);
    }
  }

})();