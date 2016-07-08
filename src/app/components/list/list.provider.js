(function () {
  'use strict';

  angular.module('ktest')
    .provider('$list', $list);


  function $list(){
    var typeView = null;
    return{
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
