(function () {
  'use strict';

  angular.module('ktest')
    .provider('$list', $list);


  function $list(){

    var listTypes = [];
    return{


      registrListType: function(newListType){
        var template = {
          'title': 'item menu',
          'state': '',
          'order': Number.MAX_SAFE_INTEGER
        };
        if(newListType instanceof Object){
          angular.extend(template, newListType);
          listTypes.push(newListType);
        } else{
          console.error('Меотод registrListType ожидает получить объект')
        }
      },
      $get: function(){
        return{
          getTypeView:function(){

          },
          setTypeView: function(){

          }
        }
      }
    }

  }

})();
