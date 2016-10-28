'use strict';

module.exports = (value) => {
  if (value instanceof Date)
    return true;
  return false;
};
