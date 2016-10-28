'use strict';

const callback404 = require('./callback-http-404');
const sha1 = require('../../services/sha1-service');

module.exports = (err, data, res, pass) => {
  if(err) {
    console.log('Erro: ', err);
    return res.end(JSON.stringify(err));
  }

  if(data === null)
    return callback404(res);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(sha1.verify(pass, data.senha)));
};
