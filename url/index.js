const url = require('url');

// url.parse()
let urlStr = 'http://www.baidu.com:8080/course/list/index.html?name=sheng&&id=12#floor1';
console.log(url.parse(urlStr));
console.log('query obj: ', url.parse(urlStr, true).query);
console.log(url.parse('//www.baidu.com/course/list', true));
// hostname: null, pathname: '//www.baidu.com/course/list'
console.log(url.parse('//www.baidu.com/course/list', true, true));
// hostname: 'www.baidu.com', pathname: '/course/list', slashes: true,


// url.format()
let urlObj = {
    protocol: 'http:',
    slashes: true,
    auth: null,
    host: 'www.baidu.com:8080',
    port: '8080',
    hostname: 'www.baidu.com',
    hash: '#floor1',
    search: '?name=sheng&&id=12',
    query: 'name=sheng&&id=12',
    pathname: '/course/list/index.html',
    path: '/course/list/index.html?name=sheng&&id=12',
}
console.log(url.format(urlObj));  // http://www.baidu.com:8080/course/list/index.html?name=sheng&&id=12#floor1

// url.resolve()
console.log(url.resolve('/one/two/three', 'four'));         // '/one/two/four'
console.log(url.resolve('http://example.com/', '/one'));    // 'http://example.com/one'
console.log(url.resolve('http://example.com/one', '/two')); // 'http://example.com/two'