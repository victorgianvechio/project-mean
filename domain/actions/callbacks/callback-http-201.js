'use strict';

module.exports = (err, data, res) => {
  if(err) {
    console.log('Erro: ', err);
    return res.end(JSON.stringify(err));
  }
  res.writeHead(201, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};
