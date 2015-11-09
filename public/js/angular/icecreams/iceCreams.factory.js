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
      return data;
    }

    function iceCreamError(error) {
      console.log(error)
    }

    function deleteIceCream(iceCreamId) {
      var url = '/api/icecreams/' + iceCreamId;
      console.log(url);
      return $http.delete(url, iceCreamId)
        .success(iceCreamSuccess)
        .error(iceCreamError);
    }

    return {
      postIceCream: postIceCream,
      getIceCreams: getIceCreams,
      deleteIceCream: deleteIceCream
    };
  }

})();