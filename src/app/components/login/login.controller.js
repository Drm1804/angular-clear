(function () {
    'use strict';

  angular.module('ktest')
  .controller('LoginController', LoginController);


  LoginController.$inject = ['$auth', '$state', '$contsApp'];
  function LoginController($auth, $state, $contsApp){
    var vm = this;
    vm.login = login;
    vm.run = run;


    function login(){
      $auth.logIn();
      $state.go($contsApp.defaultState);
    }

    function run(){

    }

  }

})();
