'use strict';

const eventoModel = require('../../domain/models/evento-model');

const controller = {
  getEventos: (req, res) => {
    return eventoModel.find(req, res, '');
  },

  postEvento: (req, res) => {
    return eventoModel.create(req, res, req.body);
  },

  putEvento: (req, res) => {
    return eventoModel.update(req, res, req.params, req.body);
  },

  deleteEvento: (req, res) => {
    return eventoModel.remove(req, res, req.params);
  }
};

module.exports = controller;
