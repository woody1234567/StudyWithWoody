let sum = function (max) {
    let total = 0;
    for (let i = 1; i <= max; i++) {
        total += i;
    }
    return total;
}

// using the arrow function syntax
let multiply = ({ a, b }) => {
    return a * b;
}

// one line arrow function
// let multiplyOneLine = (a, b) => (a * b);

let math = {
    sum: sum,
    multiply: multiply
};

// 語法：export default 資料

// 預設引入所有的math function
export default math;

// 如果要個別引用請使用非預設方法引入
export { multiply, sum };