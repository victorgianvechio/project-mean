'use strict';

const field = {
  type: Number,
  required: true,
  get: (v) => v,
  set: (v) => v,
  trim: true,
  unique: false,
  index: false
};

module.exports = field;
