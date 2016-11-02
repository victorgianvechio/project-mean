'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const path = require('path');
const compression = require('compression');

const alunosRoute = require('./api/routes/aluno-route');
const docentesRoute = require('./api/routes/docente-route');

let PORT = process.env.PORT || '3000';
let DOMAIN = process.domain || 'localhost';

//let API_V1 = '/api/v1/';

const server = express();

server.set('port', PORT);
server.set('views', path.join(__dirname, './web/dist'));
server.set('view engine', 'pug');

server.use(compression());
server.use(favicon(path.join(__dirname, './web/img', 'mean-ico.ico')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, './web')));

server.use('/api/v1/alunos', alunosRoute);
server.use('/api/v1/docentes', docentesRoute);

server.get('/', (req, res) => {
  res.redirect('/login');
});

server.get('/login', (req, res) => {
  res.render('login-min');
});

server.get('/alunos', (req, res) => {
  res.render('aluno-min');
});

server.get('/docs/api/v1', (req, res) => {
  res.redirect('//project-mean-api-docs.azurewebsites.net/');
});

server.listen(PORT, () => {
  console.log('App listening on http://' + DOMAIN + ':' + PORT);
});
