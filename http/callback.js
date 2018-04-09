function learn(something) {
    console.log(something);
}

function we(callback, something) {
    something = 'we learn ' + something;
    callback(something);
}

we(learn, 'Nodejs');

we(function(something) {
    console.log(something);
}, 'jade');