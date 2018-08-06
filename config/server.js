var express = require('express'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    consign = require('consign');

var application = express();

application.set('view engine', 'ejs');
application.set('view', './app/mvc/view');

application.use('/static', express.static('./app/public'));
application.use(bodyParser.urlencoded({extended: true}));
application.use(session({
    secret: 'G3r4D0r_T0k3N5',
    resave: false,
    saveUninitialized: false
}));

consign()
    .include('app/routes')
    .then('app/mvc/controller')
    .then('app/mvc/model')
    .then('config/db.js')
    .into(application);

module.exports = application;