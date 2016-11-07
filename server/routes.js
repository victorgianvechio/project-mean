'use strict';

module.exports = (server) => {

    // API ROUTES
    server.use('/api/v1/alunos', require('../api/routes/aluno-route'));
    server.use('/api/v1/docentes', require('../api/routes/docente-route'));
    server.use('/api/v1/eventos', require('../api/routes/evento-route'));

    // WEB APP ROUTES
    server.get('/', (req, res) => {
        res.redirect('/login-aluno');
    });

    server.get('/login-aluno', (req, res) => {
        res.render('login-aluno-min');
    });

    server.get('/login-docente', (req, res) => {
        res.render('login-docente-min');
    });

    server.get('/alunos', (req, res) => {
        res.render('aluno-min');
    });

    server.get('/docs/api/v1', (req, res) => {
        res.redirect('//project-mean-api-docs.azurewebsites.net/');
    });
};
