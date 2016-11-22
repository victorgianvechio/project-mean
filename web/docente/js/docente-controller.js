angular.module('app')
.controller('docente-controller', DocenteController);

function DocenteController($scope, $http) {

  $scope.cadastrar = function () {

    var titulo = document.getElementById('titulo').value;
    var descricao = document.getElementById('descricao').value;
    var codCurso = document.getElementById('curso').value;
    var dtaEvento = document.getElementById('dtaEvento').value;
    var qtdDias = document.getElementById('qtdDias').value;

    var data = {
      'titulo':titulo,
      'descricao':descricao,
      'codCurso':codCurso,
      'dtaEvento':dtaEvento,
      'qtdDias':qtdDias
    };

    $http.post('//localhost:8080/api/v1/eventos', data)
    .then(function (success) {
      //alert(JSON.stringify(success));
      alert('Evento cadastrado!');
      document.getElementById('titulo').value = '';
      document.getElementById('descricao').value = '';
      document.getElementById('dtaEvento').value = '';
      document.getElementById('qtdDias').value ='';
    }, function (error) {
      alert(JSON.stringify(error));
    });

  }
}
