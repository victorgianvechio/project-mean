'use strict';

const app = angular.module('app', []);

app.controller('LoginController', LoginController);

function LoginController($scope, $http, $location, $rootScope) {//, $rootScope
  $scope.mensagem = '';

  $scope.logar = function (email, senha) {
    $scope.mensagem = '';
    $http.post('//localhost:8080/api/v1/alunos/authAluno/' + email, senha)
    .success(function (data) {
      //$rootScope.loggedIn = true;
      //$rootScope.UsuarioLogado = data;
      //$location.path('/');
      alert(data);
    })
    .error(function (data) {
      if (data != null) {
        //$scope.mensagem = data.message;
        alert(data);
      }
    });
  }

  /*$scope.loggoff = function () {
    $rootScope.loggedIn = false;
    $rootScope.UsuarioLogado = null;
    $location.path('/login');
  }*/
}
