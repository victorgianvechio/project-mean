'use strict';

const isInteger = require('./isInteger');

module.exports = (ra) => {
  if (ra.toString().length === 6) return true;
  return false;
};
