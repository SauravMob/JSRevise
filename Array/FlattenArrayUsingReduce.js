const intArray = [1, 2, 3, 4, [5, 6, 7], 8, 9, [10, 11, 12]];

const flattenArray = intArray.reduce((old, curr) => {
    return Array.isArray(curr) ? [...old, ...curr] : [...old, curr]
}, [])

console.log(flattenArray)