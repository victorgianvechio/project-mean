'use strict';

const isDate = require('./isDate');
const getAge = require('./getAge');

module.exports = (dta_nasc) => {
  if (isDate(dta_nasc))
    if (getAge(new Date, dta_nasc) >= 18)
      return true;
  return false;
};
