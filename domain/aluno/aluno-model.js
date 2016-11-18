'use strict';

const mongoose = require('../../db/db-connection');
const Schema = require('./aluno-schema');
const Aluno = mongoose.model('aluno', Schema);

const actions = require('../actions/aluno-actions')(Aluno);

module.exports = {
  create: actions.create,
  find: actions.find,
  findByRa: actions.findByRa,
  update: actions.update,
  remove: actions.remove,
  verifyPass: actions.verifyPass,
  authAluno: actions.authAluno
};
