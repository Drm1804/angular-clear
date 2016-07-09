(function () {
    'use strict';

  angular.module('ktest')
  .controller('ListController', ListController);

  ListController.$inject = ['$list', '$state'];

  function ListController($list, $state){
    var vm = this;
    vm.listsData = [];
    vm.searchFilter = '';
    vm.getDataList = getDataList;
    vm.run = run;
    vm.goTo = goTo;
    vm.goToFirstListState = goToFirstListState;
    vm.run();

    function goTo(state){
      $state.go(state)
    }

    function goToFirstListState (){
      if($state.current.name === 'auth.list' || $state.current.name === 'auth.list.default'){
        $state.go(vm.listsData[1].state);
      }
    }



    function getDataList(){
      vm.listsData = $list.getListsData();
    }

    function run (){
      vm.getDataList();
      vm.goToFirstListState();
    }

  }

})();
