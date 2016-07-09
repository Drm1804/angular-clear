(function () {
  'use strict';

  angular.module('ktest')
    .config(config);

  config.$inject = ['$stateProvider', '$listProvider'];
  function config($stateProvider, $listProvider) {
    $stateProvider
      .state('auth.list.table', {
        url: '/table',
        templateUrl: 'app/components/list/list-table/table.html'
      });

    $listProvider
      .registrListType({
        title: 'Таблица',
        state: 'auth.list.table',
        order: 5
      });

  }

})();
