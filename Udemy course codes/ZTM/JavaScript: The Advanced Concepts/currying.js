/* It takes only one argument at a time */
const multiply = (a) => {
    return (b) => {
        return a * b
    }
}

const multiplyBy5 = multiply(5);
console.log(multiplyBy5(10));
console.log(multiplyBy5(20));