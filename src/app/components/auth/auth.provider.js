(function () {
  'use strict';

  angular.module('ktest')
    .provider('$auth', $auth);

  $auth.$inject = [];
  function $auth() {
    var auth = null;
    return {
      $get: function ($q, $timeout) {
        return {
          isAuthorize: function(){
            var dfd = $q.defer();

            // Имитируем асинхронный ответ
            $timeout(function(){
              if(auth === null){

                if(localStorage.auth === 'true'){
                  auth = true;
                } else {
                  auth = false;
                }
              }

              if(auth){
                dfd.resolve()
              } else {
                dfd.reject()
              }

            });

            return dfd.promise;
          },
          logIn: function(){
            auth = true;
            localStorage.auth = true;

          },
          logOut: function(){
            auth = false;
            localStorage.auth = false;
          },

          // Служебный метод для тестов
          returnAuth: function(){
            return auth;
          }


        }
      }
    }
  }
})();
