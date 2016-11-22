'use strict';

const mongoose = require('../../db/db-connection');
const Schema = require('./docente-schema');
const Docente = mongoose.model('docente', Schema);

const actions = require('../actions/docente-actions')(Docente);

module.exports = {
  create: actions.create,
  find: actions.find,
  findByCod: actions.findByCod,
  update: actions.update,
  remove: actions.remove,
  verifyPass: actions.verifyPass,
  authDocente: actions.authDocente
};
