'use strict';

const config = require('./db-config');

module.exports = {
  mongo: {
    user: config.mongo.user,
    pass: config.mongo.pass,
    server: {
      ssl: true
      //sslValidate: true,
      //sslCert: fs.readFileSync('./ssl/mongodb.crt'),
      //sslKey: fs.readFileSync('./ssl/mongodb.key')
    }
  },

  mySql: {
    user: config.mySql.user,
    pass: config.mySql.user,
  },

  oracle: {
    user: config.oracle.user,
    pass: config.oracle.user,
  },

  localhost: {
    user: config.localhost.user,
    pass: config.localhost.user,
  }
};
