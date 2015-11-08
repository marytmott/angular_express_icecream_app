(function() {
  'use strict';

  angular.module('iceCreamTown.iceCreams')
    .controller('IceCreamsController', IceCreamsController);

  IceCreamsController.$inject = ['IceCreamRequests'];

  function IceCreamsController(IceCreamRequests) {
    var vm = this;
    vm.toggleForm = toggleForm;
    vm.addIceCream = addIceCream;
    vm.showForm = false;
    vm.iceCream = {};
    vm.flavors = getFlavors();
    console.log(vm.flavors);

    function toggleForm() {
      vm.showForm = !vm.showForm;
      // console.log(vm.showForm);
    }

    function addIceCream() {
      return IceCreamRequests.postIceCream(vm.iceCream);
      // console.log(vm.iceCream);

    }

    function getFlavors() {
      return IceCreamRequests.getIceCreams().then(findData);

      function findData(data) {
        console.log(data.data);
        return data.data;
      }
    }

  }

})();