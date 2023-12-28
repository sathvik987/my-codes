const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done... 1");
    }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Done... 2");
    }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('The promise return fail');
    }, 1000);
});

promise.then((res) => {
    console.log(res);
    return res;
}).then((res) => {
    console.log(res + "!!!");
    throw new Error("Some error");
}).catch((e) => {
    console.log(e);
});

promise3
    .then((res) => console.log(res))
    .catch((e) => {
        console.log(e);
    });

Promise.all([promise, promise2]).then((res) => console.log(res)).catch((e) => {
    console.log(e);
});

async function f1() {
    try {
        let res = await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json();
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

f1();
