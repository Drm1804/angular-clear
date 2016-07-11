describe('Тестируем ListController', function () {


  var dfd;
  var $state;
  var $list;
  var $auth;
  var $contsApp;
  var ctrl;
  var $scope;
  var $listGetListsDataValue;

  beforeEach(module('ktest'));

  beforeEach(inject(function (_$state_, _$list_, _$auth_, _$contsApp_, $rootScope, $controller, $q) {
    var dfd = $q.defer();
    $state = _$state_;
    $list = _$list_;
    $auth = _$auth_;
    $contsApp = _$contsApp_;
    $scope = $rootScope.$new();
    ctrl = $controller('ListController', {
      $scope: $scope
    });


  }));


  describe('Тестируем методы контроллера', function () {

    describe('Тестируем метод goTo', function () {

      beforeEach(function () {
        spyOn($state, 'go');
      });

      it('Должен быть вызван провайдер $state, с указаннымми аргументами', function () {
        var state = 'some-state';
        ctrl.goTo(state);
        expect($state.go).toHaveBeenCalledWith(state)
      });

    });

  });

  describe('Тестируем метод goToFirstListState', function () {


  });

  describe('Тестируем метод logOut', function () {

    beforeEach(function () {
      spyOn($state, 'go');
      spyOn($auth, 'logOut');
    });

    it('Ожидаем вызов провайдера аутентификации', function () {
      ctrl.logOut();
      expect($auth.logOut).toHaveBeenCalled()
    });

    it('Ожидаем вызов провайдера $state со стейтом по умолчанию', function () {
      var defaultState = $contsApp.defaultState;
      ctrl.logOut();
      expect($state.go).toHaveBeenCalledWith(defaultState);
    });

    it('Метод ctrl.logOut должен веруть false', function () {

      var result = ctrl.logOut();
      expect(result).toBeFalsy()

    });

  });

  describe('Тестируем метод getDataList', function () {


    beforeEach(function () {
      $listGetListsDataValue = ['some array'];
      spyOn($list, 'getListsData').and.returnValue($listGetListsDataValue);
    });

    it('$list.getListsData должен быть вызван', function () {

      ctrl.getDataList();
      expect($list.getListsData).toHaveBeenCalled();

    });

    it('ctrl.lestsData должен быть равен полученному от провайдера $list значению', function () {
      ctrl.getDataList();

      expect(ctrl.listsData).toEqual($listGetListsDataValue)
    });

  });

  describe('Тестируем метод run', function () {

    beforeEach(function(){
      spyOn(ctrl, 'getDataList');
      spyOn(ctrl, 'goToFirstListState');
    });

    it('Метод ctrl.getDataList должен быть вызван', function () {
      ctrl.run();
      expect(ctrl.getDataList).toHaveBeenCalled();
    });


  });

});

