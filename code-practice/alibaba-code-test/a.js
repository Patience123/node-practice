// 实现一个CSS选择器

var genCssSelector = function(element){
    // Your code
    var str = element.nodeName + ' ';
    var parent = element.parentNode;
    // console.log(parent.nodeName);
    while(parent) {
        if(parent.className) {
            str += '.' + parent.className + ' ';
        } else if(parent.id) {
            str += '#' + parent.id + ' ';
        } else {
            str += parent.nodeName + ' ';
        }
        parent = parent.parentNode;
        // console.log(str)
    }
    str = str.split(' ').reverse().join(' ').toLocaleLowerCase();
    return str;
}

document.addEventListener('click', function(e){
    //点击li时，返回：html body #page .content.main .refer ul li
    console.log(genCssSelector(e.target));
})