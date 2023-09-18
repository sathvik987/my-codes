/* An inner function can access items which is in outter functions. */

const f1 = () => {
    let say = 'hello';
    const f2 = () => {
        console.log(say);
    }
    return f2;
}

const tell = f1();
tell();

