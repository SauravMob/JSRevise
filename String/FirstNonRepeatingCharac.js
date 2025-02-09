// Find the first non repeating charac
let str = "abcdeabfc"

function firstNonRepeatingCharac(text) {
    let MAX_INT = 26
    let charInt = new Array(MAX_INT).fill(-1);

    for (let i = 0; i < text.length; i++) {
        let charVal = getCharInt(text.charAt(i))
        if (charInt[charVal] === -1) charInt[charVal] = i;
        else charInt[charVal] = -2;
    }

    let firstChar = "$";

    for (let i = 0; i < MAX_INT; i++) {
        if (charInt[i] >= 0 && firstChar === "$") {
            firstChar = text[charInt[i]];
        }
    }

    return firstChar;
}

function getCharInt(char) {
    return char.charCodeAt(0) - 'a'.charCodeAt(0)
}

console.log(firstNonRepeatingCharac(str))