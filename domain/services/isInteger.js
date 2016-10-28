'use strict';

module.exports = (value) => {
  if ((Number(value) === value) && (value % 1 === 0))
    return true;
  return false;
};
