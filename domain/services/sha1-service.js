'use strict'

const passwordHash = require('password-hash');

module.exports = {
  encode: (pass) => {
    return passwordHash.generate(pass);
  },
  verify: (pass, hashedPass) => {
    return passwordHash.verify(pass, hashedPass);
  }
};
