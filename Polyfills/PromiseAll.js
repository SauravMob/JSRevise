function importantAction(usermame) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Important Action");
        }, 1000)
    })
}

function shareTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Share the video");
        }, 1000)
    })
}

function likeTheVideo(video) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Like The Video");
        }, 1000)
    })
}

Promise.myPromiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        const result = [];

        if (!promises.length) {
            resolve(result);
            return;
        }

        let pending = promises.length;

        promises.forEach((element, idx) => {
            Promise.resolve(element).then((res) => {
                result[idx] = res;
                pending--;

                if (pending === 0) {
                    resolve(result);
                }
            }, reject)
        });
    })
}

Promise.myPromiseAll([
    importantAction(),
    shareTheVideo(),
    likeTheVideo()
]).then((res) => console.log(res)).catch((err) => console.log(err))