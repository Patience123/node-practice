var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var formidable = require('formidable');

var server = http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    if (pathname == '/filepost') {
        fs.readFile('filepost.html', 'utf-8', function (err, data) {
            if (err) {
                console.log(err);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        })
    } else if (pathname == '/postfile') {
        var form = new formidable.IncomingForm();
        form.uploadDir = "./temp";
        form.parse(req, function (err, fields, files) {
            res.writeHead(200, { "Content-Type": "text/html" });
            console.log(files);
            var path = files.fujian.path
            console.log(path);
            fs.rename(files.fujian.path, './temp/1.jpg')
            res.end();
        })
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('error: 404');
        console.log('error');
    }
})

server.listen(8080);
console.log('server is building at: http://127.0.0.1:8080');