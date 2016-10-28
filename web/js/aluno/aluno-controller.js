'use strict';

const app = angular.module('app', []);

app.controller('aluno-controller', ($scope, $http) => {

    $http.get('//localhost:3000/api/v1/alunos')
    .success((data) => {
        $scope.alunos = data;
    });
});
