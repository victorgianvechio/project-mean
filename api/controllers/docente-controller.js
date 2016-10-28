'use strict';

const docenteModel = require('../../domain/models/docente-model');

const controller = {
  getDocentes: (req, res) => {
    return docenteModel.find(req, res, '');
  },

  getDocenteByCod: (req, res) => {
    return docenteModel.findByCod(req, res, req.params);
  },

  postDocente: (req, res) => {
    return docenteModel.create(req, res, req.body);
  },

  putDocente: (req, res) => {
    return docenteModel.update(req, res, req.params, req.body);
  },

  deleteDocente: (req, res) => {
    return docenteModel.remove(req, res, req.params);
  },

  verifyPass: (req, res) => {
    return docenteModel.verifyPass(req, res, req.params, req.body['senha']);
  }
};

module.exports = controller;
