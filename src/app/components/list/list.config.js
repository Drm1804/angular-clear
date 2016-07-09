(function () {
  'use strict';


  angular.module('ktest')
    .config(config);

  config.$inject = ['$stateProvider', '$urlRouterProvider'];
  function config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider
      .when('/list', function ($state) {
        $state.go('auth.list.default', {}, {reload: true});
      });


    $stateProvider
      .state('auth.list.default', {
        url: '/default',
        controller: function ($state) {
          $state.go('auth.list', {}, {reload: true});
        }
      });


    $stateProvider
      .state('auth.list', {
        url: '/list',
        templateUrl: 'app/components/list/list.html'
      });
  }

})();
