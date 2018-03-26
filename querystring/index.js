const querystring = require('querystring');

let searchObj = {
    name: 'sheng',
    age: 21,
    hobby: [
        'basketball',
        'football'
    ]
}

console.log(querystring.stringify(searchObj));  // name=sheng&age=21&hobby=basketball&hobby=football
console.log(querystring.stringify(searchObj, ',', ':'));  // name:sheng,age:21,hobby:basketball,hobby:football

let searchStr = 'name=sheng&age=21&hobby=basketball&hobby=football'
console.log(querystring.parse(searchStr));  // { name: 'sheng', age: '21', hobby: [ 'basketball', 'football' ] }
console.log(querystring.parse('course=node,id=368'));  // { course: 'node,id=368' }
console.log(querystring.parse('course:node, id:368', ',', ':'));  // { course: 'node', ' id': '368' }

// querystring.escape(), querystring.unescape()
console.log(querystring.escape('<哈哈>'));  // %3C%E5%93%88%E5%93%88%3E
console.log(querystring.unescape('%3C%E5%93%88%E5%93%88%3E'));  // <哈哈>
