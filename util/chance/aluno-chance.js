'use strict';

const Chance = require('chance');
const chance = new Chance();

module.exports = chance.mixin({
  'aluno': () => {
    return {
      id_aluno: chance.integer({min: 1, max: 999}).toString(),
      uuid: chance.guid(),
      nome: chance.name(),
      ra: chance.natural({min: 111111, max: 999999}).toString(),
      cpf: chance.cpf(),
      email: chance.email({domain: 'univem.edu.com'}),
      dta_nasc: chance.birthday({string: true, american: false, type: 'adult'})
    };
  }
});
