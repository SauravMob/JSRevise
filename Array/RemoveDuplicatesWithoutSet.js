const intArray = [1,2,3,3,4,4,5,5,5,6];

function removeDuplicate(arr) {
    let result = []
    for (let key in arr) {
        if (!result.includes(arr[key])) result.push(arr[key])
    }
    return result
}

console.log(removeDuplicate(intArray))