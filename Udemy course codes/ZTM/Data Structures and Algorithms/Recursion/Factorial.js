//Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop


//T - O(n), S - O(1)
function findFactorialIterative(number) {
    if (number == 1 || number == 0) {
        return 1;
    }

    let answer = 1;

    for (let i = 1; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}

// T - O(n), S - O(n)
function findFactorialRecursive(number) {
    if (number == 1 || number == 0) {
        return 1;
    }
    return number * findFactorialRecursive(number - 1)
}
//ex: 5*4! -> 4*3! -> 3*2! -> 2*1! -> 1*0! -> return 1
console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));
