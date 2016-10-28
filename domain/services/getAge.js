'use strict';

module.exports = (date1, date2) => {
  return Number(date1.getFullYear()) - Number(date2.getFullYear());
};
