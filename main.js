'use strict'

var routes = require('./routes');
var express = require('express');   
var app = express();


app.get('/', routes.home);


app.listen(3000, function (request) {
    console.log("okay, listen little shit");
});


 