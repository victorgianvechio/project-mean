'use strict';

const express = require('express');

const server = express();

require('./config')(server, express);
require('./routes')(server, express);
