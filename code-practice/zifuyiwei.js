/* 小Q最近遇到了一个难题：把一个字符串的大写字母放到字符串的后面，各个字符的相对位置不变，且不能申请额外的空间。
 * 你能帮帮小Q吗？
 */

const readline = require('readline');
 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
rl.on('line', function (line) {
    var result = [];
    var reg = /[A-Z]/;
    var input = line.split('');
    for (var i = 0; i < input.length; i++) {
        if (reg.test(input[i])) {
            result.push(input[i]);
            input.splice(i, 1, '');
        }
    }
    console.log(input.concat(result).join(''));
})