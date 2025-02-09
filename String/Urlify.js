let str = "I am Saurav Upadhyay"

function urlify(text) {
    let charArray = text.split("")
    let modifiedArray = []

    charArray.forEach(element => {
        if (element === " ") {
            modifiedArray.push("%20")
        }
        else modifiedArray.push(element)
    });

    return modifiedArray.join("")
}

console.log(urlify(str))