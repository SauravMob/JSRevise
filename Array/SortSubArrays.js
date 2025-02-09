const intArray = [45, 99, 32, 10, 56, [54, 1, 5], 4, 2, 1, [5, 2, 1]];

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

function customSort(arr) {
    let numbers = [];
    let subarrays = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            bubbleSort(item);
            subarrays.push(item);
        } else {
            numbers.push(item);
        }
    }
    bubbleSort(numbers);
    return [...numbers, ...subarrays];
}

// console.log(customSort(intArray))

const sortArray = intArray
    .map(item => Array.isArray(item) ? item.sort((a, b) => a - b) : item)
    .sort((a, b) => (Array.isArray(a) && Array.isArray(b)) ? 0 : Array.isArray(a) ? 1 : Array.isArray(b) ? -1 : a - b);
console.log(sortArray)