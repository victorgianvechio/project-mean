'use strict';

module.exports = (res) => {
  res.writeHead(404, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify('Recurso não encontrado.'));
};
