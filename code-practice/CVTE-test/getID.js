/*树形数据data，data里id属性必有，children可能有。
  实现一个findPath函数，根据所给的id，找到其祖先的id，并用'.'连接
*/

let data = [
    {
        id: 1
    }, {
        id: 2
    }, {
        id: 5,
        children: [
            {
                id: 3
            }, {
                id: 54,
                children: [
                    {
                        id: 545
                    }
                ]
            }
        ]
    }
]

let result = '';
const findPath = (tree, id) => {
    for (let i = 0; i < tree.length; i++) {
        if (tree[i]['id'] === id) {
            result += id;
            // console.log(result);
        }
        if (Object.keys(tree[i]).length > 1) {
            result += tree[i]['id'] + '.';
            // console.log(result);
            findPath(tree[i]['children'], id);
        }
    }
    return result;
}

console.log(findPath(data, 545)) //"5.54.545"