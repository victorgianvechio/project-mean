'use strict';

const app = angular.module('app', []);

app.controller('aluno-controller', ($scope, $http) => {

  $http.get('//localhost:8080/api/v1/alunos')
  //$http.get('//project-mean.azurewebsites.net/api/v1/alunos')
  .success((data) => {
    $scope.alunos = data;
  });
});
