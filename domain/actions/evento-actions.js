'use strict';

const callback = require('./callbacks/callback-http');

module.exports = (Evento) => {

  const actions = {

    create: (req, res) => {
      Evento.create(req.body, (err, data) => callback._201(err, data, res));
    },

    find: (req, res) => {
      Evento.find(req.params, (err, data) => callback._200(err, data, res));
    },

    findByCod: (req, res) => {
      Evento.findOne(req.params, (err, data) => callback._200(err, data, res));
    },

    update: (req, res) => {
      Evento.update(req.params, req.body, (err, data) => callback._204(err, data, res));
    },

    remove: (req, res) => {
      Evento.remove(req.params, (err, data) => callback._204(err, data, res));
    }
  };
  return actions;
};
