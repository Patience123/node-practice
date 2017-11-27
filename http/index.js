//做客户机来请求别的服务器
var http = require('http');

var options = {
    hostname: 'localhost',
    port: 8080,
    path: '/page1.html',  //get目录下
    method: 'GET'
}

var req = http.request(options, function(res) {
    console.log('statusCode: ' + res.statusCode);
    console.log(res.headers);
    console.log(JSON.stringify(res.headers));
    res.on('data', function(chunk) {
        console.log('BODY: ' + chunk);
    })
})

req.on('error', function(e) {
    console.log('error: ' + e.message);
});

req.end();