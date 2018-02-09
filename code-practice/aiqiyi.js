//爱奇艺2017秋招笔试（一）编程题 2,3题
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,   
    output: process.stdout
});

// 第二题(构建三角形)
// rl.on('line', function(str) {
//     let border;
//     border = str.split(' ');
//     // console.log(border);
//     border.sort(function(a, b) {
//         return a - b;
//     })
//     let a, b, c;
//     a = parseInt(border[0]);
//     b = parseInt(border[1]);
//     c = parseInt(border[2]);
//     while(c >= a + b) {
//         c--;
//     }
//     console.log(a + b + c);
// })

// 第三题（循环数比较）
rl.on('line', function(str) {
    let arr = str.split(' ');
    function repeat(x, k) {
        let times = parseInt(k);
        let result = '';
        for(let i = 0; i < times; i++) {
            result = result + x;
        }
        return result;
    }
    let a = repeat(arr[0], arr[1]);
    let b = repeat(arr[2], arr[3]);
    console.log(a, b);
    if(parseInt(a) == parseInt(b)) {
        console.log('Equal');
    } else if(parseInt(a) < parseInt(b)) {
        console.log('Less');
    } else {
        console.log('Greater');
    }
})