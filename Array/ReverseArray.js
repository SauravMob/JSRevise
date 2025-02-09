const intArray = [1, 2, 3, 4, 5, 6, 7, 8];
const arrLength = intArray.length - 1;

// Reverse the array using recursion
function reverse(arr, index, newArr) {
    if (index < 0) {
        return newArr
    }

    newArr.push(arr[index])
    return reverse(arr, index - 1, newArr)
}

console.log(reverse(intArray, arrLength, []))