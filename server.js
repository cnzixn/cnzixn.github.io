var http = require('http');
var url = require("url");
var fs = require('fs');

var root = __dirname; //current path

var server = http.createServer(function(req, res) {

    var urlpath = url.parse(req.url).pathname;
    if (urlpath == '/')
        urlpath = '/index.html';

    var file = root + urlpath;
    //console.log(urlpath,file);

    fs.readFile(file, function(err, data) {
        if (err) {
            //console.log(urlpath,file);
            res.writeHeader(404, {
                'content-type': 'text/html;charset="utf-8"'
            });
            res.write('<h1>404</h1><p>file not found</p>');
            res.end();
        } else {
            res.writeHeader(200, {
                'content-type': 'text/html;charset="utf-8"'
            });
            res.write(data);
            res.end();
        }
    }); //fs.readFile

}).listen(8888); //http.createServer

console.log('http is OK ==> http://127.0.0.1:8888/');