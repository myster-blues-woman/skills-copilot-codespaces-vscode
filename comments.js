//Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = require('./comments.js');
var port = 8080;

//Create a server
http.createServer(function(req, res) {
    var url_parts = url.parse(req.url);
    var path = url_parts.pathname;
    console.log(path);
    if (path == "/") {
        path = "index.html";
    }

    fs.readFile(path.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, {'Content-Type': 'text/html'});
        } else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data.toString());
        }
        res.end();
    });
}).listen(port);


