let str = "Saurav";

function reverseString(text) {
    let charArray = str.split("")
    let n = charArray.length
    for (let i = 0; i < n / 2; i++) {
        let temp = charArray[n - i - 1];
        charArray[n-i-1] = charArray[i];
        charArray[i] = temp;
    }
    return charArray.join("")
}

function reverseUsingRecursion(text, index, result) {
    if (index < 0) {
        return result
    }
    result = result + text.charAt(index)
    return reverseString(text, index - 1, result)
}

console.log(reverseUsingRecursion(str, str.length, ""))