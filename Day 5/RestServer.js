/**
 * Created by Amit Thakkar on 22/05/15.
 */
(function (require) {
    var express = require('express');
    var app = express();
    var bodyParser = require('body-parser');  // for reading POSTed form data into `req.body`
    var mongoose = require('mongoose');
    var winston = require('winston');
    winston.level = 'silly';

    var mongoURL = 'mongodb://localhost/test';
    mongoose.connect(mongoURL);
    var db = mongoose.connection;
    db.on('error', function (error) {
        winston.error(error.message);
    });
    db.once('open', function () {
        winston.info('Connected with mongodb on ', mongoURL);
    });
    app.use(bodyParser.json());
    app.use(function (req, res, next) {
        winston.silly("Request: ", req.url);
        next();
    });
    require('./routeMapping')(app);
    var server = app.listen(3000, function () {
        winston.info('TODO app listening at http://localhost:' + server.address().port);
    });
})(require);