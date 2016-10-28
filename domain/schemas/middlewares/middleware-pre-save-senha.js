'use strit';

const sha1 = require('../../services/sha1-service');

module.exports = (schema) => {
  schema.pre('save', function(next) {
    this.senha = sha1.encode(this.senha);
    next();
  });
};
