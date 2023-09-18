/* An inner function can access items which is in outter functions. */
const f1 = () => {
    const msg = "Hello...";
    const f2 = () => {
        console.log(msg);
    }
    return f2
}

const myFunc = f1()
myFunc()