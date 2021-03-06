/**
 * Created by Amit Thakkar on 22/05/15.
 */
(function (require) {
    var express = require('express');
    var app = express();
    app.use(function (req, res, next) {
        console.log("Request: ", req.url);
        next();
    });
    require('./routes')(app);
    var server = app.listen(3000, function () {
        console.log('TODO app listening at http://localhost:' + server.address().port);
    });
})(require);