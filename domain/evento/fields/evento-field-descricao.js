'use strict';

const field = {
  type: String,
  validate: [(v) => v.length >= 1, 'Insira uma descrição.'],
  required: true,
  get: (v) => v,
  set: (v) => v,
  trim: true,
  unique: true,
  index: false
};

module.exports = field;
