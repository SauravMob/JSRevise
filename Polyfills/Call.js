// Create a polyfill for call method

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error("this" + "is not callable");
    }
    context.fn = this;
    context.fn(...args);
}

const obj = { name: "Saurav", age: 12 };
function printDetails() {
    console.log(this.name + " with age " + this.age)
}

printDetails.myCall(obj)