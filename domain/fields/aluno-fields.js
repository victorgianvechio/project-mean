'use strict';

const validate_email = require('../services/isEmailValid');
const validate_ra = require('../services/aluno-ra-service');
const validate_cpf = require('../services/isCpfValid');
const rm_special_char = require('../services/remove-special-char');
const cpf_mask = require('../services/cpf-mask');
const date_pt_BR = require('../services/format-date-pt_BR');

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

  cpf: {
    type: String,
    validate: [validate_cpf, 'CPF inválido.'],
    required: true,
    get: (v) => cpf_mask(v),
    set: (v) => rm_special_char(v),
    trim: true,
    unique: true,
    index: false
  },

  ra: {
    type: String,
    validate: [validate_ra, 'RA precisa ter 6 dígitos.'],
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

  codCurso: {
    type: Number,
    required: true,
    get: (v) => v,
    set: (v) => v,
    trim: true,
    unique: false,
    index: false
  },

  senha: {
    type: String,
    required: true,
    minlength: [5, 'Senha deve ter mais que 5 caracteres.'],
    get: (v) => v,
    set: (v) => v,
    trim: true,
    unique: false,
    index: false
  },

  dtaNasc: {
    type: Date,
    required: true,
    get: (v) => date_pt_BR(v),
    set: (v) => v,
    trim: true,
    unique: false,
    index: false
  }
};

module.exports = Fields;
