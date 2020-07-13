"use strict";

var routes = require("./routes");
var express = require("express");
var path = require("path");
var app = express();

app.use(express.static("./public"));
app.get("/", routes.home);

app.listen(3000, function (request) {
  console.log("okay, listen little shit");
});
