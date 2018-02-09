/*
出专辑
你作为一名出道的歌手终于要出自己的第一份专辑了，你计划收录 n 首歌而且每首歌的长度都是 s 秒，每首歌必须完整地收录于一张 CD 当中。
每张 CD 的容量长度都是 L 秒，而且你至少得保证同一张 CD 内相邻两首歌中间至少要隔 1 秒。
为了辟邪，你决定任意一张 CD 内的歌数不能被 13 这个数字整除，那么请问你出这张专辑至少需要多少张 CD ？
*/
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', function(str) {
    let str_Array = str.split(' ');
    //console.log(str_Array);
    let n = parseInt(str_Array[0]);
    let s = parseInt(str_Array[1]);
    let l = parseInt(str_Array[2]);
    let i = 0, j = 0; //i代表一张CD中的歌曲数，j代表CD的个数

    i = Math.floor(l / (s + 1));
    if(i % 13 == 0) {
        console.log(i);
        i--;
    }
    if(s == l) {
        i = 1;
    }
    console.log(i);
    j = Math.ceil(n / i);
    if(j == 1 && n % 13 == 0) {
        j++;
    }
    console.log(j);
})
