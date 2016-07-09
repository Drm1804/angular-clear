(function () {
  'use strict';

  angular.module('ktest')
    .controller('ListTableController', ListTableController);

  ListTableController.$inject = ['$list'];

  function ListTableController($list) {
    var vm = this;
    vm.usersList = [];
    vm.sort = '';
    vm.sortDesc = false;

    vm.balanceSortFunc = balanceSortFunc;
    vm.getUsersList = getUsersList;
    vm.run = run;
    vm.run();


    function balanceSortFunc(typeSort){
      if (vm.sort !== typeSort) {
        vm.sortDesc = false;
        vm.sort = typeSort;
      } else {
        if (!vm.sortDesc) {
          vm.sortDesc = true;
        } else {
          vm.sort = '';
          vm.sortDesc = false;

        }
      }
    }


    function getUsersList() {
      $list.getUsersList()
        .then(function (resp) {
          vm.usersList = resp;
        })
    }

    function run() {
      vm.getUsersList();
    }
  }


})();
