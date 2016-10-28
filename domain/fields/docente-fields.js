'use strict';

const validate_email = require('../services/isEmailValid');
const validate_ra = require('../services/aluno-ra-service');
const sha1 = require('../services/sha1-service');

const Fields = {

  nome: {
    type: String,
    validate: [(v) => v.length >= 3, 'Nome precisa ter mais de três letras.'],
    required: true,
    get: (v) => v,
    set: (v) => v,
    trim: true,
    unique: false,
    index: false
  },

  codDocente: {
    type: String,
    validate: [validate_ra, 'Código precisa ter 6 dígitos.'],
    required: true,
    get: (v) => v,
    set: (v) => v,
    trim: true,
    unique: true,
    index: true
  },

  email: {
    type: String,
    validate: [validate_email, 'Email {VALUE} inválido.'],
    required: true,
    get: (v) => v,
    set: (v) => v,
    trim: true,
    unique: true,
    index: false
  },

  senha: {
    type: String,
    minlength: [5, 'Senha deve ter mais que 5 caracteres.'],
    required: true,
    get: (v) => v,
    set: (v) => v,
    trim: true,
    unique: false,
    index: false
  }
};

module.exports = Fields;
