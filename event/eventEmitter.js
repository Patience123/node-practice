const EventEmitter = require('events').EventEmitter;

const people = new EventEmitter();

// 设置监听器的最大数量
people.setMaxListeners(11);

// 监听事件
function work(who) {
    console.log(who + ' is working');
}
people.on('doing', work);

people.on('doing', function (who) {
    console.log(who + ' is playing');
});

people.on('doing', function (who) {
    console.log(who + ' is running');
});

people.on('doing', function (who) {
    console.log(who + ' is studying');
});

people.on('doing', function (who) {
    console.log(who + ' is watching');
});

people.on('doing', function (who) {
    console.log(who + ' is dancing');
});

people.on('doing', function (who) {
    console.log(who + ' is singing');
});

people.on('doing', function (who) {
    console.log(who + ' is talking');
});

people.on('doing', function (who) {
    console.log(who + ' is drawing');
});

people.on('doing', function (who) {
    console.log(who + ' is coding');
});

people.on('doing', function (who) {
    console.log(who + ' is reading');
});

// 移除监听器
people.removeListener('doing', work);
// people.removeAllListeners('doing');  // 移除所有doing事件的监听器

// 触发事件
// people.emit('doing', 'wsheng');

var doingListenner = people.emit('doing', 'wsheng');
var doneListenner = people.emit('done', 'James');

// 监听器的数量
console.log(EventEmitter.listenerCount(people, 'doing'));
console.log(people.listeners('doing').length);

console.log(doingListenner); // true
console.log(doneListenner);  // false(该事件没有被监听)