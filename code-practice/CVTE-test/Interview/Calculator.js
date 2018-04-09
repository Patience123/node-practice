// 定义一个Calculate函数实现计算器功能
// Calculate(10).add(2).sub(5).multiply(4).divide(7).print() //4

function Calculate(num) {
    this.num = num;
    this.add = function(data) {
        this.num += data;
        return this;
    };
    this.sub = function(data) {
        this.num -= data;
        return this;
    };
    this.multiply = function(data) {
        this.num *= data;
        return this;
    };
    this.divide = function(data) {
        this.num /= data;
        return this;
    };
    this.print = function() {
        console.log(this.num);
    }
}

var cal = new Calculate(10);
cal.add(2).sub(5).multiply(4).divide(7).print();
