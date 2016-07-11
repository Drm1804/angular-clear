(function () {
  'use strict';

  angular.module('ktest')
    .controller('ListCardsController', ListCardsController);

  ListCardsController.$ingect = ['$list'];

  function ListCardsController($list) {
    var vm = this;
    vm.usersList = [];
    vm.searchFilter = '';
    vm.getUsersList = getUsersList;

    vm.run = run;
    vm.run();

    function getUsersList() {
      $list.getUsersList()
        .then(function (resp) {
          vm.usersList = resp;
        })
    }

    function run() {
      vm.getUsersList()
    }
  }


})();
