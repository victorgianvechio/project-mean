'use strict';

const querystring = require('querystring');
const url = require('url');

module.exports = (_url) => {
  const url_parts = url.parse(_url);
  console.log('getQuery _url - ', _url);
  console.log('getQuery url_parts - ', url_parts);
  console.log('getQuery url_parts.query - ', url_parts.query);
  console.log('getQuery querystring - ', querystring.parse(url_parts.query));
  return querystring.parse(url_parts.query);
};
