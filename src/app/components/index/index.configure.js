(function () {
  'use strict';

  angular.module('ktest')
    .config(config);

  config.$inject = ['$urlRouterProvider', '$stateProvider'];
  function config($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/list');

    $stateProvider
      .state('auth', {
        abstract: true,
        template: '<ui-view></ui-view>',
        resolve: {
          auth: function ($q, $auth, $state) {
            console.log('988798797978')
            var dfd = $q.defer();

            $auth.isAuthorize()
              .then(
                function () {
                  dfd.resolve();
                },
                function () {
                  $state.go('login');
                }
              );

            return dfd.promise;
          }
        }
      })

  }

})();
