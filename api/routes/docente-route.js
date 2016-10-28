'use strict';

const express = require('express');
const docenteController = require('../controllers/docente-controller');

const router = express.Router();

router.get('/', (req, res) => {
  docenteController.getDocentes(req, res);
});

router.get('/:codDocente', (req, res) => {
  docenteController.getDocenteByCod(req, res);
});

router.post('/', (req, res) => {
  docenteController.postDocente(req, res);
});

router.put('/:codDocente', (req, res) => {
  docenteController.putDocente(req, res);
});

router.delete('/:codDocente', (req, res) => {
  docenteController.deleteDocente(req, res);
});

router.post('/verifyPass/:codDocente', (req, res) => {
  docenteController.verifyPass(req, res);
});

module.exports = router;
