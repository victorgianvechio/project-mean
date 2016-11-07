'use strict';

const callback = require('./callbacks/callback-http');

module.exports = (Aluno) => {

    const actions = {

        create: (req, res, aluno) => {
            Aluno.create(aluno, (err, data) => callback._201(err, data, res));
        },

        find: (req, res, query) => {
            Aluno.find(query, (err, data) => callback._200(err, data, res));
        },

        findByRa: (req, res, query) => {
            Aluno.findOne(query, (err, data) => callback._200(err, data, res));
        },

        update: (req, res, query, aluno) => {
            Aluno.update(query, aluno, (err, data) => callback._204(err, data, res));
        },

        remove: (req, res, query) => {
            Aluno.remove(query, (err, data) => callback._204(err, data, res));
        },

        verifyPass: (req, res, query, pass) => {
            Aluno.findOne(query, (err, data) => callback._200_verifyPass(err, data, res, pass));
        },

        authAluno: (req, res, query, pass) => {
            Aluno.findOne(query, (err, data) => callback._200_verifyPass(err, data, res, pass));
        }

    };
    return actions;
};
