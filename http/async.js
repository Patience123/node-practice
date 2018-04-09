let c = 0;

// 同步
// function print() {
//     console.log(c)
// }
// function plus() {
//     c++;
// }
// plus();
// print();  // 1

// 异步
// function print() {
//     console.log(c);
// }
// function plus() {
//     setTimeout(function() {
//         c++;
//     }, 1000);
// }
// plus();
// print();  // 0

// 通过回调来解决异步问题
function print() {
    console.log(c);
}
function plus(callback) {
    setTimeout(function() {
        c++;
        callback();
    }, 1000);
}
plus(print);  // 1