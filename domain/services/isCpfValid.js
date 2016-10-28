'use strict'

const rm_special_char = require('./remove-special-char');

module.exports = (cpf) => {
  let soma = 0;
  let resto = 0;
  var i = 0;

  cpf = rm_special_char(cpf);

  if (cpf == "00000000000")
    return false;

  for (i=1; i<=9; i++)
    soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i);

  resto = (soma * 10) % 11;
  if ((resto == 10) || (resto == 11))
    resto = 0;

  if (resto != parseInt(cpf.substring(9, 10)))
    return false;

  soma = 0;
  for (i = 1; i <= 10; i++)
    soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i);

  resto = (soma * 10) % 11;
  if ((resto == 10) || (resto == 11))
    resto = 0;

  if (resto != parseInt(cpf.substring(10, 11)))
    return false;

  return true;
}
