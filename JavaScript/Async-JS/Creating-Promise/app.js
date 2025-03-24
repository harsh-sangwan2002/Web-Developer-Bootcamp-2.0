const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}

fakeRequest('/dogs/1').then(() => {
    console.log("Done with the request!");
}).catch(err => {
    console.log(err);
})