'use strict';

const mongoose = require('mongoose');
const dbURI = require('./db-uri');
const options = require('./db-options');

mongoose.Promise = global.Promise;
mongoose.connect(dbURI.localhost, options.localhost);

mongoose.connection.on('connected', () => {
    console.log('Mongoose default connection connected to ' + dbURI.localhost);
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
