/* We use two functions to create one function,output of one function can be any input for another. */

const double = (x) => {
    return x * 2
}

const triple = (x) => {
    return x * 3
}

const compose = (f1, f2) => {
    return (x) => {
        return f1(f2(x))
    }
}

let composed = compose(double, triple)
console.log(composed(2));