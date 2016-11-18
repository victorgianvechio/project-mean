'use strict';

module.exports = (express) => {
  const router = express.Router();

  const docenteModel = require('../../domain/docente/docente-model');
  const routes = require('../routes/api-routes')(router);

  routes.get('/', docenteModel.find);
  routes.get('/:codDocente', docenteModel.findByCod);
  routes.post('/', docenteModel.create);
  routes.put('/:codDocente', docenteModel.update);
  routes.delete('/:codDocente', docenteModel.remove);
  routes.post('/verifyPass/:codDocente', docenteModel.verifyPass);

  return router;
};

/*const express = require('express');
const router = express.Router();

const docenteModel = require('../../domain/models/docente-model');
const routes = require('../routes/api-routes')(router);

routes.get('/', docenteModel.find);
routes.get('/:codDocente', docenteModel.findByCod);
routes.post('/', docenteModel.create);
routes.put('/:codDocente', docenteModel.update);
routes.delete('/:codDocente', docenteModel.remove);
routes.post('/verifyPass/:codDocente', docenteModel.verifyPass);

module.exports = router;*/
