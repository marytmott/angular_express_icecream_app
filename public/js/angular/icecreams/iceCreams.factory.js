(function() {
  'use strict';

  angular.module('iceCreamTown.iceCreams')
    .factory('IceCreamRequests', IceCreamRequests);

  IceCreamRequests.$inject = ['$http'];

  function IceCreamRequests($http) {

    function postIceCream(iceCream) {
      return $http.post('/api/icecreams', iceCream)
        .success(iceCreamSuccess)
        .error(iceCreamError);


    }

    function getIceCreams() {
      return $http.get('/api/icecreams')
        .success(iceCreamSuccess)
        .error(iceCreamError);
    }

    function iceCreamSuccess(data) {
      console.log(data);
      return data;
    }

    function iceCreamError(data) {
      console.log(error)
    }


    return {
      postIceCream: postIceCream,
      getIceCreams: getIceCreams
    };
  }

})();