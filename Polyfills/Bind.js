// Create a polyfill for Bind method
Function.prototype.myBind = function(context = {}, ...args) {
    if (typeof this !== "function") {
        throw new Error("Not a function");
    }

    context.fn = this;
    return function (...newArgs) {
        return context.fn(...args, ...newArgs)
    }
}

function printDetails(...args) {
    console.log(this.name + " : " + this.age + " : " + args);
}

const obj = {name :"Saurav", age: "42"}
const newFunc = printDetails.myBind(obj, 22);
newFunc(34)