'use strict';

const callback = require('./callbacks/callback-http');

module.exports = (Docente) => {

  const actions = {

    create: (req, res) => {
      Docente.create( req.body, (err, data) => callback._201(err, data, res));
    },

    find: (req, res) => {
      Docente.find(req.params, (err, data) => callback._200(err, data, res));
    },

    findByCod: (req, res) => {
      Docente.findOne(req.params, (err, data) => callback._200(err, data, res));
    },

    update: (req, res) => {
      Docente.update(req.params, req.body, (err, data) => callback._204(err, data, res));
    },

    remove: (req, res) => {
      Docente.remove(req.params, (err, data) => callback._204(err, data, res));
    },

    verifyPass: (req, res) => {
      Docente.findOne(req.params, (err, data) => callback._200_verifyPass(err, data, res, req.body['senha']));
    }
  };
  return actions;
};
