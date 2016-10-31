'use strict';

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//const dbURI = 'mongodb://pmdb:123456@ds137267.mlab.com:37267/project-mean';
//const dbURI = 'mongodb://project-mean:agQGOjU5PAi5neOiOkc2ypXhrCfpGS78REitrRpfUnmipQCO5nqZfavG2NEAxSzl0vTJ9D2VEFKZlmOuc8rHVw==@project-mean.documents.azure.com:10250/?ssl=true/project-mean';
const dbURI = 'mongodb://localhost/project-mean';

mongoose.connect(dbURI);

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
  mongoose.connection.close( ()=> {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

module.exports = mongoose;
