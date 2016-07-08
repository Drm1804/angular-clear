(function () {
  'use strict';

  angular.module('ktest')
    .config(config);

  config.$inject = ['$stateProvider'];
  function config($stateProvider) {

    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'app/components/login/login.html'
      })

  }

})();
