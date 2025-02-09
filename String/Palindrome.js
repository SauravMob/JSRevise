const str = "tacocat";

function isPalindrome(text) {
    let reversed = text.split("").reverse().join("");
    return reversed == text;
}

console.log(isPalindrome(str) ? "Is Palindrome" : "Not a Palindrome")