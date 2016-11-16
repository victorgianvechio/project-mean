'use strict';

const mongoose = require('../../db/db-connection');
const Fields = require('../fields/evento-fields');

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

module.exports = _schema;
