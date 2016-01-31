/**
 * Created by Shubham on 1/6/2016.
 */
var static = require('node-static');
var http = require('http');
var fs = require('fs');
var file = new(static.Server)();
var app = http.createServer(  function(req, res) {
    file.serve(req, res);
}).listen(3000);
