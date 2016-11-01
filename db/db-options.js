'use strict';

const config = require('./db-config');

module.exports = {
  user: config.mongo.user,
  pass: config.mongo.pass,
  server: {
    ssl: true
    /*sslValidate: true,
    sslCert: fs.readFileSync('./ssl/mongodb.crt'),
    sslKey: fs.readFileSync('./ssl/mongodb.key')*/
  }
};