// Create Polyfill for filter

Array.prototype.myFilter = function (callback) {
    var intialArray = []
    for (let i = 0; i < this.length; i++) {
        let ele = callback(this[i], i, this);
        if (ele) intialArray.push(this[i]);
    }
    return intialArray;
}

const filterArray = [1, 2, 3, 4, 5, 6, 7, 8].filter((v) => v % 2 == 0)
console.log(filterArray)