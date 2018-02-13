var exec = require('child_process').exec
var fs = require('fs');
var path = require('path');

// //读取文件（同步）
// var data = fs.readFileSync('a.txt', 'utf-8');
// console.log(data);

// //复制文件
// exec('copy a.txt b.txt', function() {
//     //修改文件名
//     fs.rename('b.txt', 'del.txt');
// });

// //删除文件
// fs.unlink('del.txt');

//修改文件内容
//fs.open(path, flags, [mode], [callback(err,fd)])
//'r' -   以读取模式打开文件。
//'r+' - 以读写模式打开文件。
//'rs' - 使用同步模式打开并读取文件。指示操作系统忽略本地文件系统缓存。
//'rs+' - 以同步的方式打开，读取 并 写入文件。
//注意：这不是让fs.open变成同步模式的阻塞操作。如果想要同步模式请使用fs.openSync()。
//
//'w' - 以读取模式打开文件，如果文件不存在则创建
//'wx' - 和 ' w ' 模式一样，如果文件存在则返回失败
//'w+' - 以读写模式打开文件，如果文件不存在则创建
//'wx+' - 和 ' w+ ' 模式一样，如果文件存在则返回失败
//
//'a' - 以追加模式打开文件，如果文件不存在则创建
//'ax' - 和 ' a ' 模式一样，如果文件存在则返回失败
//'a+' - 以读取追加模式打开文件，如果文件不存在则创建
//'ax+' - 和 ' a+ ' 模式一样，如果文件存在则返回失败
//mode    用于创建文件时给文件制定权限，默认0666

fs.open('a.txt', 'a', function (err, fd) {
    if (err) {
        throw err;
    }
    var data = '2345678987654 hsadfkj';
    fs.write(fd, data, function (err, bytesWritten, buffer) {
        console.log(bytesWritten);
        console.log(buffer);
        fs.close(fd, function (err) {
            if (err) {
                throw err;
            }
            console.log('file closed');
        })
    })
})

//通过Promise封装一个读取文件的操作
function readFilePromise(fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf-8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data.toString());
            }
        });
    });
}

//参数传递
function f2() {
    const fullFileName = path.resolve(__dirname, 'data1.json')
    const result = readFilePromise(fullFileName, 'utf-8');
    result.then(data => {
        console.log(data);
        return JSON.parse(data).name;
    }).then(name => {
        console.log(name);
    }).catch(err => {
        console.log(err.stack);
    })
}
// f2();

//串联读取多个文件
function f3() {
    const fullFileName1 = path.resolve(__dirname, 'data1.json');
    const fullFileName2 = path.resolve(__dirname, 'data2.json');
    const result1 = readFilePromise(fullFileName1, 'utf-8');
    const result2 = readFilePromise(fullFileName2, 'utf-8');

    result2.then(data2 => {
        console.log(data2);
        return result1;
    }).then(data1 => {
        console.log(data1);
    })
}
// f3();

// Promise.all 和 Promise.race
function fn4() {

    const fullFileName2 = path.resolve(__dirname, 'data2.json')
    const result2 = readFilePromise(fullFileName2)
    const fullFileName1 = path.resolve(__dirname, 'data1.json')
    const result1 = readFilePromise(fullFileName1)

    Promise.all([result1, result2]).then(datas => {
        console.log(datas[0])
        console.log(datas[1])
    })

    Promise.race([result1, result2]).then(data => {
        console.log(data)
    })

}
// fn4();

