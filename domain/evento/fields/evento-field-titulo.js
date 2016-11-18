'use strict';

const field = {
  type: String,
  validate: [(v) => v.length >= 1, 'Insira um título.'],
  required: true,
  get: (v) => v,
  set: (v) => v,
  trim: true,
  unique: false,
  index: false
};

module.exports = field;
