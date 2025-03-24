const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection timeout! :(');
        }
        else {
            success(`Here is your fake data from ${url}`);
        }
    }, delay);
}

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

// Callback hell
fakeRequestCallback('books.com', function (response) {
    console.log("It worked!!!");
    console.log(response);
    fakeRequestCallback('books.com/page2', function (response) {
        console.log("It worked again!!!");
        console.log(response);
        fakeRequestCallback('books.com/page3', function (response) {
            console.log("It worked again!!!");
            console.log(response);

            fakeRequestCallback('books.com/page4', function (response) {
                console.log("It worked again!!!");
                console.log(response);
            }, function (err) {
                console.log(err);
            })
        }, function (err) {
            console.log(err);
        })
    }
        , function (err) {
            console.log(err);
        })
}, function () {
    console.log("Error!!!");
})

// Promse hell
fakeRequestPromse('yelp.com/api/coffee/page1').then(() => {
    console.log("It worked!!!");
    fakeRequestPromse('yelp.com/api/coffee/page2').then(() => {
        console.log("It worked again!!!");
        fakeRequestPromse('yelp.com/api/coffee/page3').then(() => {
            console.log("It worked again!!!");
        }).catch(() => {
            console.log("Error!!!");
        })
    }).catch(() => {
        console.log("Error!!!");
    })
}
    , () => {
        console.log("Error!!!");
    }
)

// Promise chaining
fakeRequestPromse('yelp.com/api/coffee/page1').then((data) => {
    console.log("It worked!!!");
    console.log(data);
    return fakeRequestPromse('yelp.com/api/coffee/page2');
}).then((data) => {
    console.log("It worked again!!!");
    console.log(data);
    return fakeRequestPromse('yelp.com/api/coffee/page3');
}).then((data) => {
    console.log("It worked again!!!");
    console.log(data);
}).catch((err) => {
    console.log("Error!!!");
    console.log(err);
})