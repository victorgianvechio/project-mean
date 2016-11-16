'use strict';

const express = require('express');
const alunoController = require('../controllers/aluno-controller');

const router = express.Router();

router.get('/', (req, res) => {
  alunoController.getAlunos(req, res);
});

router.get('/:ra', (req, res) => {
  alunoController.getAlunoByRa(req, res);
});

router.post('/', (req, res) => {
  alunoController.postAluno(req, res);
});

router.put('/:ra', (req, res) => {
  alunoController.putAluno(req, res);
});

router.delete('/:ra', (req, res) => {
  alunoController.deleteAluno(req, res);
});

router.post('/verifyPass/:ra', (req, res) => {
  alunoController.verifyPass(req, res);
});

router.post('/authAluno/:email', (req, res) => {
  alunoController.authAluno(req, res);
});

module.exports = router;
