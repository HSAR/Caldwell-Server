/// <reference path="../../typings/index.d.ts" />

import * as express from "express";

// configure Express

var app = express();
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000));

// start server

app.listen(app.get('port'), function() {
    console.log('Caldwell backend is running on port', app.get('port'));
});