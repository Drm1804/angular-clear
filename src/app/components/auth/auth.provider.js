(function () {
  'use strict';

  angular.module('ktest')
    .provider('$auth', $auth);

  $auth.$inject = [];
  function $auth() {
    return {
      $get: function ($q, $timeout) {
        return {
          auth: false,
          isAuthorize: function(){
            var _this = this;
            var dfd = $q.defer();

            // Имитируем асинхронный ответ
            $timeout(function(){
              if(_this.auth){
                dfd.resolve()
              } else {
                dfd.reject()
              }

            });

            return dfd.promise;
          }


        }
      }
    }
  }
})();
