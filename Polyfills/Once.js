// Create a polyfill for Once method.
// Once causes method to run only once
function once(fn, context) {
    let ran;

    return function() {
        if (fn) {
            ran = fn.apply(context || this, arguments);
            fn = null;
        }
        return ran;
    };
}

const hello = once((a, b) => console.log("Hello", a, b));

hello(1,2)
hello(1,2)
hello(1,2)
hello(1,2)