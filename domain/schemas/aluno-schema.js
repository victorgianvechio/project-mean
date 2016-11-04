'use strict';

const mongoose = require('../../db/db-connection');
const Fields = require('../fields/aluno-fields');

const Schema = mongoose.Schema;

const _schema = new Schema(Fields, {
  timestamps: true,
  toJSON: {
    getters: true,
    setters: true
  },
  versionKey: false,
  id: false
});

require('./middlewares/middleware-pre-save-senha')(_schema);
require('./middlewares/middleware-pos-delete-evento')(_schema);

module.exports = _schema;
