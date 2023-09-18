//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233..


let counter1 = 0

function fib1(n) {
    counter1++
    if (n < 2) {
        return n
    }

    return fib1(n - 1) + fib1(n - 2)

}

console.log(`Normal: ${fib1(13)}, ${counter1} operation`)

// top down
// O(n) but takes more memory
let counter2 = 0
function fibMaster() {
    let cache = {}

    function fib2(n) {
        counter2++
        if (cache[n]) {
            return cache[n]
        } else {
            if (n < 2) {
                return n
            }
            cache[n] = fib2(n - 1) + fib2(n - 2)
            return cache[n]
        }
    }
    return fib2
}

let fasterFib = fibMaster()
console.log(`Dp: ${fasterFib(13)}, ${counter2} operation`)


//bottom up approach
let counter3 = 0
function fib3(n) {
    let fib = [0, 1]
    for (let i = 2; i < n + 1; i++) {
        counter3++
        fib.push(fib[i - 2] + fib[i - 1])
    }

    return fib[n]

}

console.log(`Dp2: ${fib3(13)}, ${counter3} operation`)