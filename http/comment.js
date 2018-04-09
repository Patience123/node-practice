const http = require('http');
const queryString = require('querystring');

let postData = queryString.stringify({'content': '很适合入门的人学', 'mid': 16703});

let options = {
    host: 'www.imooc.com',
    port: 80,
    path: '/course/docomment',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie': 'imooc_uuid=6a924c87-0346-4b10-94ec-5e9916490457; imooc_isnew_ct=1521261883; imoo' +
                'c_isnew=2; PHPSESSID=2d4p98fauje9tdk9l44nblptg1; IMCDNS=0; Hm_lvt_f0cfcccd7b1393' +
                '990c78efdeebff3968=1521962729,1522065193,1522419122,1523018025; loginstate=1; ap' +
                'sid=IzN2NlOGZkYmU1OGM2ZWU1YTg3MmY5ODE0MTczODgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA' +
                'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANjU4NTQ0MQAAAAAAAAAAAAAAAAAAAA' +
                'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMxOGMzMGNmYWEyNTRhOTgwMm' +
                'M5MzJhNGExYWZmODI5JSnKWgAAAAA%3DNG; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=152' +
                '3198514; cvde=5ac769272e3b6-170',
        'Host': 'www.imooc.com',
        'Origin': 'https://www.imooc.com',
        'Referer': 'https://www.imooc.com/video/16703',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chro' +
                'me/65.0.3325.162 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

let req = http.request(options, function (res) {
    console.log('Status: ', res.statusCode);
    console.log('headers: ', JSON.stringify(res.headers));

    res.on('data', function (chunk) {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof chunk);
    });

    res.on('end', function () {
        console.log('评论完毕');
    });
})

req.on('error', function (e) {
    console.log('error', e.message);
});
req.write(postData);
req.end();