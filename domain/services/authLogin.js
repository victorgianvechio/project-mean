'use strict';

const sha1 = require ('./sha1-service');

module.exports = (schema) => {
    schema.methods.authLogin = function(pass) {
        if (sha1.verify(String(pass), String(this.senha)) === true) return true;
        return false;
    };
};
