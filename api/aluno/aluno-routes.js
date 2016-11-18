'use strict';

module.exports = (express) => {
  const router = express.Router();

  const alunoModel = require('../../domain/aluno/aluno-model');
  const routes = require('../routes/api-routes')(router);

  routes.get('/', alunoModel.find);
  routes.get('/:ra', alunoModel.findByRa);
  routes.post('/', alunoModel.create);
  routes.put('/:ra', alunoModel.update);
  routes.delete('/:ra', alunoModel.remove);
  routes.post('/verifyPass/:ra', alunoModel.verifyPass);
  routes.post('/authAluno/:email', alunoModel.authAluno);

  return router;
};

/*const express = require('express');
const router = express.Router();

const alunoModel = require('../../domain/models/aluno-model');
const routes = require('../routes/api-routes')(router);

routes.get('/', alunoModel.find);
routes.get('/:ra', alunoModel.findByRa);
routes.post('/', alunoModel.create);
routes.put('/:ra', alunoModel.update);
routes.delete('/:ra', alunoModel.remove);
routes.post('/verifyPass/:ra', alunoModel.verifyPass);
routes.post('/authAluno/:email', alunoModel.authAluno);

module.exports =  router;*/
