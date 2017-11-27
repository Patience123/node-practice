var mysql = require('mysql');
var fs = require('fs');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'wx19960527',
    database: 'test',
    charset: 'UTF8_GENERAL_CI',
    debug: false
});

connection.connect();

// var add = 'INSERT INTO student VALUES("2","2015013028","kun","one","school","male")';

// connection.query(add, function(err) {
//     if(err) {
//         throw err;
//     } else {
//         console.log('insert success');
//     }
// })

connection.query('SELECT * FROM student', function (err, rs) {
    if (err) {
        throw err;
    }
    if (rs) {
        for (var i = 0; i < rs.length; i++) {
            //console.log(rs[i]);
            console.log('姓名：' + rs[i].stuName + ' 学号：' + rs[i].stuID + ' 班级：' + rs[i].stuClass + '\n');
        }
    }
})

connection.query('SELECT * FROM student WHERE id = ?', ['1'], function (err, rs) {
    if (err) {
        throw err;
    } else {
        //console.log(rs);
        fs.open('a.txt', 'w', function(err, fd) {
            if(err) {
                throw err;
            }
            var data = JSON.stringify(rs);
            fs.write(fd, data, function(err, bytesWritten, buffer) {
                fs.close(fd, function (err) {
                    if (err) {
                        throw err;
                    }
                    console.log('file closed');
                })
            })
        })
    }
})

connection.end();