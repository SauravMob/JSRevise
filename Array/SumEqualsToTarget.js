// Find two numbers that add up to a target value.
const intArray = [0, 1, 2, 3, 4, 5, 6];
const target = 6;

function sumOfSubarray(arr, target) {
    const seen = new Set();
    const result = [];
    
    for (let num of arr) {
        let complement = target - num;
        if (seen.has(complement)) {
            result.push([complement, num]);
        }
        seen.add(num);
    }
    
    return result;
}

console.log(sumOfSubarray(intArray, target))