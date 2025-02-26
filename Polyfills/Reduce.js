// Create a polyfill using reduce

Array.prototype.myReduce = function (callback, initialVal) {
    let accumulator = initialVal;
    for (let i = 0; i < this.length; i++) {
        accumulator = accumulator ? callback(accumulator, this[i], i, this) : this[i];
    }
    return accumulator;
}

const sumOfArray = [1, 2, 3, 4].myReduce((old, curr) => {
    return old + curr
}, 0)
console.log(sumOfArray)