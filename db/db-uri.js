'use strict';

const config = require('./db-config');

module.exports = {
  mongo: 'mongodb://'  + config.mongo.host + ':'
  + config.mongo.port + '/'
  + config.mongo.db,

  mySql: 'mongodb://'  + config.mySql.host + ':'
  + config.mySql.port + '/'
  + config.mySql.db,

  oracle: 'mongodb://' + config.oracle.host + ':'
  + config.oracle.port + '/'
  + config.oracle.db,

  localhost: 'mongodb://'  + config.localhost.host + '/'
  + config.localhost.db
}
