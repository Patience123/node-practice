var http = require('http');
var fs = require('fs');
var url = require('url');
//var path = require('path');
var querystring = require('querystring');

//const Dir = path.resolve('./'); 

var server = http.createServer(function(req, res) {
    var pathname = url.parse(req.url).pathname;
    //var urlText = path.join(Dir, filepath);
    if(pathname == '/login') {
        fs.readFile('login.html', 'utf-8', function(err, data) {
            if(err) {
                console.log(err);
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                res.end();
            }
        })
    } else if(pathname == '/post') {
        var post = '';

        req.on('data', function(chunk) {
            post += chunk;
        })
        
        req.on('end', function() {
            post = querystring.parse(post);
            res.writeHead(200, {'Content-Type': 'text/html'} );
            res.write('username is : ' + post.uname + '<br>');
            res.write('password is : ' + post.upasswd + '<br>');
            res.end();
        })
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('error: 404');
        console.log('error');
    }
})

server.listen(8080);
console.log('server is building at: http://127.0.0.1:8080');