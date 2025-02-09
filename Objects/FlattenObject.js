// Flatten a nested object
let obj = { a: { b: 2 }, c: { d: 4 }, e: 5 }

function flattenObject(object, prefix = "") {
    let result = {}

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            let newKey = prefix ? `${prefix}.${key}` : key;
            if (typeof object[key] === "object" && object[key] !== null) Object.assign(result, flattenObject(object[key], newKey));
            else result[newKey] = object[key];
        }
    }

    return result;
}

console.log(flattenObject(obj))