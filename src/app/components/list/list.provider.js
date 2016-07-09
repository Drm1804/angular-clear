(function () {
  'use strict';

  angular.module('ktest')
    .provider('$list', $list);


  function $list() {

    var listTypes = [];
    var url = {
      data: 'data.json'
    };

    return {
      registrListType: function (newListType) {
        var template = {
          'title': 'item menu',
          'state': '',
          'order': Number.MAX_SAFE_INTEGER
        };
        if (newListType instanceof Object) {
          angular.extend(template, newListType);
          listTypes.push(newListType);
        } else {
          console.error('Меотод registrListType ожидает получить объект')
        }
      },
      $get: function ($q, $http, $contsApp) {
        return {
          getListsData: function () {
            return listTypes;
          },
          getUsersList: function () {
            var dfd = $q.defer();

            $http.get($contsApp.serverUrl + '/' + url.data)
              .then(function (resp) {
                  dfd.resolve(resp.data);
                },
                function (resp) {
                  dfd.reject(resp);
                })

            return dfd.promise;
          }
        }
      }
    }

  }

})();
