(function () {
    'use strict';

  angular.module('ktest')
  .controller('GroupCardsController', GroupCardsController);

  GroupCardsController.$ingect = ['$list'];

  function GroupCardsController($list){
    var vm = this;
    vm.usersList = [];
    vm.getUsersList = getUsersList;
    vm.run = run;
    run();


    function getUsersList() {
      $list.getUsersList()
        .then(function (resp) {
          vm.usersList = resp;
        })
    }

    function run(){
      vm.getUsersList();
    }

  }

})();
