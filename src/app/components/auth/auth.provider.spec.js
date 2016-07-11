describe('Тестируем проввайдер $auth', function () {

  var $auth, $timeout;

  beforeEach(module('ktest'));

  beforeEach(inject(function (_$auth_, _$timeout_) {
    $auth = _$auth_;
    $timeout = _$timeout_;

  }));

  describe('Проверяем провайдеро должен существовать', function () {
    it('Должен вернуть true', function () {
      expect($auth).toBeTruthy()
    });
  });

  describe('Тестируем внешнае методы провайдера', function () {

    describe('Тестируем метод isAuthorize', function () {

      it('Ожидаем, что приватная переменная auth станет равно false, а метод вернет ошибку', function () {

        var result = null;
        $auth.isAuthorize()
          .then(
            function () {
              result = true;
            }, function () {
              result = false;
            });

        $timeout.flush();

        var auth = $auth.returnAuth();

        expect(auth).not.toBeTruthy();
        expect(result).not.toBeTruthy();

      });

      it('Ожидаем, что приватная переменная auth станет равно true, а метод вернет resolve', function () {

        localStorage.auth = true;
        var result = null;
        $auth.isAuthorize()
          .then(
            function () {
              result = true;
            }, function () {
              result = false;
            });

        $timeout.flush();

        var auth = $auth.returnAuth();

        expect(auth).toBeTruthy();
        expect(result).toBeTruthy();

      });

    });

    describe('Тестируем метод logIn', function () {

      it('Ожидаем, что приватная переменна auth и localStorage.auth станут true', function () {

        $auth.logIn();
        var auth = $auth.returnAuth();
        expect(auth).toBeTruthy();
        expect(localStorage.auth).toEqual('true');

      });

    });

    describe('Тестируем метод logOut', function () {

      it('Ожидаем, что приватная переменна auth и localStorage.auth станут false', function () {

        $auth.logOut();
        var auth = $auth.returnAuth();
        expect(auth).not.toBeTruthy();
        expect(localStorage.auth).toEqual('false');

      });

    });
  });


});
