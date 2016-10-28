'use strict';

const callback = require('./callbacks/callback-http');

module.exports = (Docente) => {

  const actions = {

    create: (req, res, docente) => {
      Docente.create(docente, (err, data) => callback._201(err, data, res));
    },

    find: (req, res, query) => {
      Docente.find(query, (err, data) => callback._200(err, data, res));
    },

    findByCod: (req, res, query) => {
      Docente.findOne(query, (err, data) => callback._200(err, data, res));
    },

    update: (req, res, query, docente) => {
      Docente.update(query, docente, (err, data) => callback._204(err, data, res));
    },

    remove: (req, res, query) => {
      Docente.remove(query, (err, data) => callback._204(err, data, res));
    },

    verifyPass: (req, res, query, pass) => {
      Docente.findOne(query, (err, data) => callback._200_verifyPass(err, data, res, pass));
    }
  };
  return actions;
};
