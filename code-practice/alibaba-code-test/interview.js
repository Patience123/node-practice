// 阿里面试过程中的一道编程题
// 找出数组中与给定的数最接近的那个数及下标，如果有接近程度相同，则取比他数值大的那个

const test = [1,3,6,8,13,17,60,70,102,155];

function findNext(n, arr) {
    let res = [];
    let diffArr = [];
    let minIndex;
    for(let i = 0; i < arr.length; i++) {
        let diff = Math.abs(n - arr[i]);
        diffArr.push(diff);
    }
    // console.log(diffArr);
    minIndex = findMinNumberIndex(diffArr);
    return arr[minIndex];
    // return minIndex;
}

function findMinNumberIndex(array) {
    let min = array[0];
    let index;
    for(let i = 0; i < array.length; i++) {
        if(array[i] <= min) {
            min = array[i];
            index = i;
        } 
    }
    return index;
}

console.log(findNext(65, test));