'use strict';

const validate_cpf = require('../../services/isCpfValid');
const rm_special_char = require('../../services/remove-special-char');
const cpf_mask = require('../../services/cpf-mask');

const field = {
  type: String,
  validate: [validate_cpf, 'CPF inválido.'],
  required: true,
  get: (v) => cpf_mask(v),
  set: (v) => rm_special_char(v),
  trim: true,
  unique: true,
  index: false
};

module.exports = field;
