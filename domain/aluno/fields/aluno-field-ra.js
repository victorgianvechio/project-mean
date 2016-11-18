'use strict';

const validate_ra = require('../../services/codUser-service');

const field = {
  type: String,
  validate: [validate_ra, 'RA precisa ter 6 dígitos.'],
  required: true,
  get: (v) => v,
  set: (v) => v,
  trim: true,
  unique: true,
  index: true
};

module.exports = field;
