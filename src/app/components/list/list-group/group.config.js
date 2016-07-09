(function () {
  'use strict';

  angular.module('ktest')
    .config(config);

  config.$inject = ['$stateProvider', '$listProvider'];
  function config($stateProvider, $listProvider) {
    $stateProvider
      .state('auth.list.group', {
        url: '/group',
        templateUrl: 'app/components/list/list-group/list-group.html'
      });

    $listProvider
      .registrListType({
        title: 'Группы',
        state: 'auth.list.group',
        order: 15
      });

  }

})();
