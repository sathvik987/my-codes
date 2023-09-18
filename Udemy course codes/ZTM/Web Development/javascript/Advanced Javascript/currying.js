/* const cur = (name) => (year) => (height) => `His name is ${name}, his height is ${height} and he is ${year} old`;


console.log(cur('jhon')('25')('6.5'));
 */

/* It takes only one argument at a time */

const multiply = (a, b) => a * b;
console.log(multiply(5, 5));


const curriedMultiply = (a) => (b) => a * b;
console.log(curriedMultiply(5)(5));
const multiplyBy5 = curriedMultiply(5);
console.log(multiplyBy5(10));