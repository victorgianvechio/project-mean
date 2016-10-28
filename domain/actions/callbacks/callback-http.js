'use strict';

const callback200 = require('./callback-http-200');
const callback201 = require('./callback-http-201');
const callback204 = require('./callback-http-204');
const callback200_verifyPass = require('./callback-http-200-verifyPass');

const callback = {
  _200: (err, data, res) => {
    callback200(err, data, res);
  },
  _201: (err, data, res) => {
    callback201(err, data, res);
  },
  _204: (err, data, res) => {
    callback204(err, data, res);
  },
  _200_verifyPass: (err, data, res, pass) => {
    callback200_verifyPass(err, data, res, pass);
  }
};

module.exports = callback;
