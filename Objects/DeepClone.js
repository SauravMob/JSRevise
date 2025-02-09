let obj = { name: "Saurav", age: 42 };
console.log("Og Object: ", obj);

// Using JSON.stringify
let obj2 = JSON.parse(JSON.stringify(obj));
obj2.age = 1;
console.log("JSON.stringify: ", obj2);

// Using Spread Operator
let obj3 = { ...obj };
obj3.age = 2;
console.log("Spread Operator: ", obj3);

// Using Object.assign()
let obj4 = Object.assign({}, obj);
obj4.age = 3;
console.log("Object.assign: ", obj4)

// Using recursive function
function deepClone(objFinal) {
    if (typeof objFinal !== "object" || objFinal === null) {
        return objFinal;
    }

    let clone = {};
    for (let key in objFinal) {
        clone[key] = deepClone(obj[key]);
    }
    return clone;
}
const obj5 = deepClone(obj)
obj5.age = 5;
console.log("Using recursion ", obj5)
console.log("Og object: ", obj)