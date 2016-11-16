'use strict';

const alunoModel = require('../../domain/models/aluno-model');

const controller = {
  getAlunos: (req, res) => {
    return alunoModel.find(req, res, '');
  },

  getAlunoByRa: (req, res) => {
    return alunoModel.findByRa(req, res, req.params);
  },

  postAluno: (req, res) => {
    return alunoModel.create(req, res, req.body);
  },

  putAluno: (req, res) => {
    return alunoModel.update(req, res, req.params, req.body);
  },

  deleteAluno: (req, res) => {
    return alunoModel.remove(req, res, req.params);
  },

  verifyPass: (req, res) => {
    return alunoModel.verifyPass(req, res, req.params, req.body['senha']);
  },

  authAluno: (req, res) => {
    return alunoModel.authAluno(req, res, req.params, req.body['senha']);
  }
};

module.exports = controller;
