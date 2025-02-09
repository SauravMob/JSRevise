let str1 = "listen"
let str2 = "silent"

function isAnagrams(text1, text2) {

    if (text1.length != text2.length) return false

    let str1Array = text1.split("").sort((a, b) => a > b ? 1 : -1)
    let str2Array = text2.split("").sort((a, b) => a > b ? 1 : -1)

    for (let i = 0; i < str1.length; i++) {
        if (str1Array[i] != str2Array[i]) return false        
    }

    return true
}

console.log(isAnagrams(str1, str2) ? "Is Anagram" : "Is not an anagram")