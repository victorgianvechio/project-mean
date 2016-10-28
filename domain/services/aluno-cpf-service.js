'use strict';

const remove = require('./remove-special-char');

module.exports = (cpf) => {
  if (remove(cpf).length === 11) return true;
  return false;
};
