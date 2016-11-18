'use strict';

const date_pt_BR = require('../../services/format-date-pt_BR');

const field = {
  type: Date,
  required: true,
  get: (v) => date_pt_BR(v),
  set: (v) => v,
  trim: true,
  unique: false,
  index: false
};

module.exports = field;
