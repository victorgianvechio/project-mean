'use strict';

const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const cookieParser = require('cookie-parser');
const path = require('path');
const compression = require('compression');

module.exports = (server, express) => {

    const PORT = process.env.PORT || '3000';
    const DOMAIN = process.domain || 'localhost';

    server.set('port', PORT);
    server.set('views', path.join(__dirname, '../web/dist'));
    server.set('view engine', 'pug');

    server.use(compression());
    server.use(favicon(path.join(__dirname, '../web/img', 'mean-ico.ico')));
    server.use(bodyParser.json());
    server.use(bodyParser.urlencoded({extended: true}));
    server.use(cookieParser());
    server.use(express.static(path.join(__dirname, '../web')));

    server.listen(PORT, () => {
        console.log('App listening on http://' + DOMAIN + ':' + PORT);
    });
};
