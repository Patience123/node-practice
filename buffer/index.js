var str = '我的课堂'
console.log(str);

var buffer = new Buffer(str, 'utf-8');
console.log(buffer);

var str2 = buffer.toString();
console.log(str2);