// 实现一个代理函数，使输出内容符合要求

function proxy() {
    // your code
    var parent = arguments[0];
    var child = arguments[1];
    Object.defineProperty(parent, "name", {
        get: function() {
            return name;
        },
        set: function(val) {
            child.name = val;
        }
    });
}

var Animal = {};
var Cat = {
    name: "Hoe"
};
proxy(Animal, Cat);
Animal.name = "Tom";
console.log(Cat.name);  // Tom