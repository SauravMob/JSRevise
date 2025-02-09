// Polyfill for map()
Array.prototype.myMap = function (callBack) {
    const resultArray = [];
    for (let i = 0; i < this.length; i++) {
        resultArray.push(callBack(this[i], i, this));
    }
    return resultArray;
}
const myMapArray = [1, 2, 3, 4].myMap((v) => v * 2)
console.log("MyMap: ", myMapArray);