'use strict';

const callback404 = require('./callback-http-404');

module.exports = (err, data, res) => {
  if(err) {
    console.log('Erro: ', err);
    return res.end(JSON.stringify(err));
  }

  if(data.n !== undefined) {
    if(data.n > 0) {
      res.writeHead(204, {'Content-Type': 'application/json'});
      return res.end(JSON.stringify(data));
    }
  }
  else {
    if(data.result.n > 0) {
      res.writeHead(204, {'Content-Type': 'application/json'});
      return res.end(JSON.stringify(data));
    }
  }

  return callback404(res);
};
