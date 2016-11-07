'use strict';

function logar() {

  let email = document.getElementById('email');
  let senha = document.getElementById('senha');

  if((email.value !== '') && (senha.value !== ''))
    window.location.href = '//localhost:8000/aluno';
  else
    alert('Email ou senha inválidos');
}
