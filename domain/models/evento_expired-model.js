'use strict';

const mongoose = require('../../db/db-connection');
const Schema = require('../schemas/evento_expired-schema');
const EventoExpired = mongoose.model('evento_expired', Schema);

const actions = require('../actions/evento-actions')(EventoExpired);

module.exports = {
    create: actions.create,
    find: actions.find,
    findByRa: actions.findByRa,
    update: actions.update,
    remove: actions.remove
};
