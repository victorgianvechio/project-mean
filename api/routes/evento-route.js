'use strict';

const express = require('express');
const eventoController = require('../controllers/evento-controller');

const router = express.Router();

router.get('/', (req, res) => {
  eventoController.getEventos(req, res);
});

router.post('/', (req, res) => {
  eventoController.postEvento(req, res);
});

router.put('/:ra', (req, res) => {
  eventoController.putEvento(req, res);
});

router.delete('/:ra', (req, res) => {
  eventoController.deleteEvento(req, res);
});

module.exports = router;
