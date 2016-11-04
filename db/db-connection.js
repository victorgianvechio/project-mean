'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dbURI = require('./db-uri');
const options = require('./db-options');
mongoose.connect(dbURI, options);

/*const dbURI = 'mongodb://localhost/project-mean';
mongoose.connect(dbURI);*/

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection connected to ' + dbURI);
});
mongoose.connection.on('error', (err) => {
  console.log('Mongoose default connection error: ' + err);
});
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose default connection is disconnected');
});
mongoose.connection.on('open', () => {
  console.log('Mongoose default connection is open');
});

process.on('SIGINT', () => {
  mongoose.connection.close( () => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose;
