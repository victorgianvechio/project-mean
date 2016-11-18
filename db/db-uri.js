'use strict';

const config = require('./db-config');

module.exports = {
  mongo: 'mongodb://'  + config.mongo.host + ':'
  + config.mongo.port + '/'
  + config.mongo.db,

  mySql: 'mysql://'  + config.mySql.host + ':'
  + config.mySql.port + '/'
  + config.mySql.db,

  oracle: 'orcl://' + config.oracle.host + ':'
  + config.oracle.port + '/'
  + config.oracle.db,

  localhost: 'mongodb://'  + config.localhost.host + '/'
  + config.localhost.db
}
