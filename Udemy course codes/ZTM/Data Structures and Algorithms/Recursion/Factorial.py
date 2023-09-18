# Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop


def findFactorialIterative(number):
    answer = 1
    for i in range(1, number+1):
        answer = answer*i

    return answer


def findFactorialRecursive(number):
    if number == 0:
        return 1

    return number * findFactorialRecursive(number-1)
 #   ex: 5*4! -> 4*3! -> 3*2! -> 2*1! -> 1*0! -> return 1


print(findFactorialIterative(5))
print(findFactorialRecursive(5))

""" Js code from course

    function findFactorialIterative(number) {
    let answer = 1;
    // you actually no longer need the if statement because of the for loop
    // if (number === 2) {
    //   answer = 2;
    // }
    for (let i = 2; i <= number; i++) {
        answer = answer * i;
    }
    return answer;
}

function findFactorialRecursive(number) {
    if (number === 2) {
        return 2;
    }
    if (number === 1) {
        return 1;
    }
    return number * findFactorialRecursive(number - 1)
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));

  //If you want, try to add a base case condition for the recursive solution if the parameter given is less than 2
 """
