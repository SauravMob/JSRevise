// Create a polyfill for promise
function myPromise(executor) {

    let onResolve,
        onReject,
        isFulfilled = false,
        isRejected = false,
        isCalled = false,
        value;

    function resolve(val) {
        isFulfilled = true;
        value = val;

        if (typeof onResolve === 'function') {
            onResolve(val);
            isCalled = true;
        }
    }

    function reject(val) {
        isRejected = true;
        value = val;
        if (typeof onResolve === 'function') {
            onReject(val);
            isCalled = true;
        }
    }

    this.then = function (callback) {
        onResolve = callback;
        if (isFulfilled && !isCalled) {
            isCalled = true;
            onResolve(value);
        }
        return this
    }

    this.catch = function (callback) {
        onReject = callback;
        if (isRejected && !isCalled) {
            isCalled = true;
            onReject(value);
        }
        return this;
    }

    try {
        executor(resolve, reject);
    } catch (error) {
        reject(error);
    }
}

// In Asynchronus operation i.e if called using setTimeout: first .then will be called else directly resolve method will be called.

const examplePromise = new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000)
})

examplePromise.then((res) => {
    console.log("Then: ", res)
}).catch((err) => console.log("catch: ", err))