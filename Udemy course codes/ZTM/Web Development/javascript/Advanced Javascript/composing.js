/* Output of one function can be any input for another. */


const compose = (f1, f2) => (v) => f1(f2(v));

const double = (x) => x * 2;

const triple = (x) => x * 3;

const composed = compose(double, triple);

console.log(composed(2));
/* or */
/* console.log(compose(double, triple)(2)); */