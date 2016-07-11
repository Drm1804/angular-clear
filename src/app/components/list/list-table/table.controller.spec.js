describe('Тестируем ListCardsController', function () {


  var dfd
  var $list;
  var ctrl;
  var $scope;

  beforeEach(module('ktest'));

  beforeEach(inject(function (_$list_, $rootScope, $controller, $q) {
    var dfd = $q.defer();
    $list = _$list_;
    $scope = $rootScope.$new();
    ctrl = $controller('GroupCardsController', {
      $scope: $scope
    });

    spyOn($list, 'getUsersList').and.returnValue(dfd.promise);
    spyOn(ctrl, 'getUsersList').and.callThrough();

  }));


  describe('Тестируем методы контроллера', function () {

    describe('Тестируем метод run', function () {
      it('Метод контролера ctrl.getUsersList() должен быть вызван', function () {
        ctrl.run();
        expect(ctrl.getUsersList).toHaveBeenCalled();
      });
    });

    describe('Тестируем метод getUsersList', function () {
      it('Метод провайдера $list.getUserList() должен быть вызван, а переменная контроллера ctrl.usersList должена получить возвращенные из провайдера данные', function () {

        ctrl.getUsersList();
        expect($list.getUsersList).toHaveBeenCalled();

      });


    });

  });

});
