angular.module('app')
.controller('login-aluno-controller', LoginAlunoController);

function LoginAlunoController($scope, $http) {

  $scope.logar = function () {

    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    var data = {
      "senha":senha
    };

    $http.post('//localhost:8080/api/v1/alunos/authAluno/' + email, data)
    .then(function (success) {

      var result = JSON.stringify(success.data)

      if(result === '"true"') {
        window.location.href = '//localhost:8080/alunos';
      }
      else {
        alert('1: Email ou senha inválido.');
      }

    }, function (error) {
      alert('2: Email ou senha inválido.');
    });
  }
}
