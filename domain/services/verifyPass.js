'use strict';

const sha1 = require ('./sha1-service');

module.exports = (schema) => {
  schema.methods.verifyPass = (pass) => {
    return sha1.verify(pass, this.senha);
  };
};
