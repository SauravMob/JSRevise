// Create a polyfill for memoize function
const clumsySquare = (num1, num2) => {
    for (let i = 0; i < 100000000; i++) { }

    return num1 * num2;
}

function myMemoize(fn, context) {
    const res = {};
    return function (...args) {
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args)
        }
        return res[argsCache];
    }
}

const memoizedProduct = myMemoize(clumsySquare)

console.time("First");
console.log(memoizedProduct(9243, 2324));
console.timeEnd("First");


console.time("Second");
console.log(memoizedProduct(9243, 2324));
console.timeEnd("Second");