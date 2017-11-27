const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

var workDir = path.resolve('./get');
console.log('Static root dir: ' + workDir);

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });

    var pathname = url.parse(request.url).pathname;
    console.log(pathname);
    var filePath = path.join(workDir, pathname);
    console.log(filePath);

    // if (url.parse(request.url).pathname != '/favicon.ico') {
    //     fs.readFile(filePath, 'utf-8', function (err, data) {
    //         if (err) {
    //             console.log(err);
    //         } else {
    //             response.write(data);
    //         }
    //         response.end();
    //     })
    // }

    fs.stat(filePath, function (err, stats) {
        if (!err && stats.isFile()) {
            // 没有出错并且文件存在:
            console.log('200 ' + request.url);
            // 发送200响应:
            response.writeHead(200);
            // 将文件流导向response:
            // fs.createReadStream(filePath).pipe(response);
            if (url.parse(request.url).pathname != '/favicon.ico') {
                fs.readFile(filePath, 'utf-8', function (err, data) {
                    if (err) {
                        console.log(err);
                    } else {
                        response.write(data);
                    }
                })
            }
        } else {
            // 出错了或者文件不存在:
            console.log('404 ' + request.url);
            // 发送404响应:
            response.writeHead(404);
            response.end('404 Not Found');
        }
    });

    // var data = fs.readFileSync('page1.html', 'utf-8');
    // response.write(data);
    // response.end('<h1>welcome, sheng!</h1>');
});

server.listen(8080);

console.log('Server is running at http://127.0.0.1:8080/');

server.on('connection', function() {
    console.log('loading...');
}) //监听连接事件(可以做连接数据统计)