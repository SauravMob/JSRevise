// Longest Non repeating substring
let str = "abcdeabcdefg"

function nonRepeatingCharac(text) {
    let left = 0, right = 0, max = "", curr = ""

    while (left <= right && right < text.length) {
        if (!curr.includes(text.charAt(right))) {
            curr += text.charAt(right)
            if (max.length < curr.length) max = curr
        } else {
            curr = text.charAt(right);
            left = right + 1;
        }
        right++;
    }

    return max;
}

console.log(nonRepeatingCharac(str))