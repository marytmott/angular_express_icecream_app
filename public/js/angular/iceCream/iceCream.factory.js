(function() {
  'use strict';

  angular.module('iceCreamTown.iceCream')
    .factory('IceCreamFactory', IceCreamFactory);

  IceCreamFactory.$inject = ['$http'];

  function IceCreamFactory($http) {
    function getIceCream(iceCreamId) {
      return $http.get('/api/icecreams/' + iceCreamId)
        .success(iceCreamSuccess)
        .error(iceCreamError);
    }

    function updateIceCream(iceCreamId, data) {
      return $http.put('/api/icecreams/' + iceCreamId, data)
        .success(iceCreamSuccess)
        .error(iceCreamError);
    }

    function iceCreamSuccess(data) {
      console.log(data);
      return data;
    }

    function iceCreamError(error) {
      console.log(error)
    }

    return {
      getIceCream: getIceCream,
      updateIceCream: updateIceCream
    };
  }

})();