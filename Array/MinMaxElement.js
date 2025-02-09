const intArray = [2,3,4,1,2,4,6,8,5];
const n = intArray.length;

const maxElement = intArray.reduce((oldVal, currVal) => {
    return oldVal < currVal ? currVal : oldVal
}, intArray[0])

const minElement = intArray.reduce((oldVal, currVal) => {
    return currVal > oldVal ? oldVal : currVal
}, intArray[0])

const sumElement = intArray.reduce((oldVal, currVal) => {
    return oldVal + currVal
}, 0)

console.log("Maximum Element: ", maxElement)
console.log("Minimum Element: ", maxElement)
console.log("Sum of all Elements: ", sumElement)