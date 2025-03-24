const fakeRequestPromse = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 4500) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection timeout! :(');
            }
            else {
                resolve(`Here is your fake data from ${url}`);
            }
        }, delay);
    });
}

async function makeTwoRequests() {

    try {
        let data1 = await fakeRequestPromse('/page1');
        console.log(data1);
        let data2 = await fakeRequestPromse('/page2');
        console.log(data2);
    } catch (err) {
        console.log("Caught an error!!");
        console.log(err);
    }
}