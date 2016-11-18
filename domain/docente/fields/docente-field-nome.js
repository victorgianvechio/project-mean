'use strict';

const field = {
  type: String,
  validate: [(v) => v.length >= 3, 'Nome precisa ter mais de três letras.'],
  required: true,
  get: (v) => v,
  set: (v) => v,
  trim: true,
  unique: false,
  index: false
};

module.exports = field;
