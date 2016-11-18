'use strict';

const field = {
  type: String,
  required: true,
  minlength: [5, 'Senha deve ter mais que 5 caracteres.'],
  get: (v) => v,
  set: (v) => v,
  trim: true,
  unique: false,
  index: false
};

module.exports = field;
