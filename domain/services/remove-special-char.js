'use strict';

module.exports = (value) => {
  return value.replace(/[`~!@#$%^&*()_|+\-=÷¿?;:'",.<>\{\}\[\]\\\/]/gi, '');
};
