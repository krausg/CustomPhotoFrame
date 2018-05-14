'use strict'

var express = require('express');
var app = express();


app.get('/', function (request, response) {
    response.write('Hello WORLD');
    response.end();
});
app.listen(3000, function (request) {
    console.log("okay, listen little shit");
});
/*var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Worl2d!');
}).listen(8080);    
*/


