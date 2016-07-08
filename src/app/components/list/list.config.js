(function () {
  'use strict';


  angular.module('ktest')
    .config(config);

  config.$inject = ['$stateProvider'];
  function config($stateProvider) {
    $stateProvider
      .state('auth.list', {
        url: '/list',
        templateUrl: 'app/components/list/list.html'
      });
  }

})();
