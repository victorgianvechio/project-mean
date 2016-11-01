'use strict';

const config = require('./db-config');

module.exports = 'mongodb://' + config.mongo.host + ':'
                              + config.mongo.port + '/'
                              + config.mongo.db;
