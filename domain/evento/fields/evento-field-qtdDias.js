'use strict';

const field = {
  type: Number,
  default: 1,
  get: (v) => v,
  set: (v) => v,
  trim: true,
  unique: false,
  index: false
};

module.exports = field;
