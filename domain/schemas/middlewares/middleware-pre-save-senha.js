'use strit';

const sha1 = require('../../services/sha1-service');

module.exports = (schema) => {
  schema.pre('save', function(next) {
    let obj = this;
    if (!obj.isModified('senha')) return next();
    obj.senha = sha1.encode(obj.senha);
    next();
  });
};
