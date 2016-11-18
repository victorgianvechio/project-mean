'use strict';

module.exports = (express) => {
  const router = express.Router();

  const eventoModel = require('../../domain/evento/evento-model');
  const routes = require('../routes/api-routes')(router);

  routes.get('/', eventoModel.find);
  routes.post('/', eventoModel.create);
  routes.put('/:ra', eventoModel.update);
  routes.delete('/:ra', eventoModel.remove);


  return router;
};

/*const express = require('express');
const router = express.Router();

const eventoModel = require('../../domain/models/evento-model');
const routes = require('../routes/api-routes')(router);

routes.get('/', eventoModel.find);
routes.post('/', eventoModel.create);
routes.put('/:ra', eventoModel.update);
routes.delete('/:ra', eventoModel.remove);

module.exports =  router;*/
