'use strict';

const validate_email = require('../../services/isEmailValid');

const field = {
  type: String,
  validate: [validate_email, 'Email {VALUE} inválido.'],
  required: true,
  get: (v) => v,
  set: (v) => v,
  trim: true,
  unique: true,
  index: false
};

module.exports = field;
