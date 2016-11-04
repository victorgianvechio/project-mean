'use strict';

const callback = require('./callbacks/callback-http');

module.exports = (Evento) => {

  const actions = {

    create: (req, res, evento) => {
      Evento.create(evento, (err, data) => callback._201(err, data, res));
    },

    find: (req, res, query) => {
      Evento.find(query, (err, data) => callback._200(err, data, res));
    },

    findByCod: (req, res, query) => {
      Evento.findOne(query, (err, data) => callback._200(err, data, res));
    },

    update: (req, res, query, evento) => {
      Evento.update(query, evento, (err, data) => callback._204(err, data, res));
    },

    remove: (req, res, query) => {
      Evento.remove(query, (err, data) => callback._204(err, data, res));
    }
  };
  return actions;
};
