'use strict';

const callback404 = require('./callback-http-404');

module.exports = (err, data, res) => {
  if(err) {
    console.log('Erro: ', err);
    return res.end(JSON.stringify(err));
  }

  if(data === null)
      return callback404(res);

  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};
