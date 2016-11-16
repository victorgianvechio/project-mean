'use strict';

const date_pt_BR = require('../services/format-date-pt_BR');

const Fields = {

  titulo: {
    type: String,
    validate: [(v) => v.length >= 1, 'Insira um título.'],
    required: true,
    get: (v) => v,
    set: (v) => v,
    trim: true,
    unique: false,
    index: false
  },

  descricao: {
    type: String,
    validate: [(v) => v.length >= 1, 'Insira uma descrição.'],
    required: true,
    get: (v) => v,
    set: (v) => v,
    trim: true,
    unique: true,
    index: false
  },

  codCurso: {
    type: Number,
    required: true,
    get: (v) => v,
    set: (v) => v,
    trim: true,
    unique: false,
    index: false
  },

  dtaEvento: {
    type: Date,
    required: true,
    get: (v) => date_pt_BR(v),
    set: (v) => v,
    trim: true,
    unique: false,
    index: false
  },

  qtdDias: {
    type: Number,
    default: 1,
    get: (v) => v,
    set: (v) => v,
    trim: true,
    unique: false,
    index: false
  },
};

module.exports = Fields;
