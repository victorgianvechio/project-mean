'use strict';

const mongoose = require('../../db/db-connection');
const Schema = require('./evento-schema');
const Evento = mongoose.model('evento', Schema);

const actions = require('../actions/evento-actions')(Evento);

module.exports = {
  create: actions.create,
  find: actions.find,
  update: actions.update,
  remove: actions.remove
};
