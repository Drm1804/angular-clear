(function () {
  'use strict';

  angular.module('ktest')
    .config(config);

  config.$inject = ['$stateProvider', '$listProvider'];
  function config($stateProvider, $listProvider) {
    $stateProvider
      .state('auth.list.table', {
        utl: '/table',
        templateUrl: 'app/components/list/list-table/list-table.html'
      });

    $listProvider
      .registrListType({
        title: 'Таблица',
        state: 'auth.list.group',
        order: 5
      });

  }

})();
