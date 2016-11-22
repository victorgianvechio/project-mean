angular.module('app')
.controller('aluno-controller', ($scope, $http) => {

  $http.get('//localhost:8080/api/v1/eventos')
  .success((data) => {
    $scope.alunos = data;
  });
});
