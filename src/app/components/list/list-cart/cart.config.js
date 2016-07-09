(function () {
  'use strict';

  angular.module('ktest')
    .config(config);

  config.$inject = ['$stateProvider', '$listProvider'];
  function config($stateProvider, $listProvider) {
    $stateProvider
      .state('auth.list.cart', {
        url: '/cart',
        templateUrl: 'app/components/list/list-cart/list-cart.html'
      });

    $listProvider
      .registrListType({
        title: 'Карточки',
        state: 'auth.list.cart',
        order: 10
      })

  }

})();
