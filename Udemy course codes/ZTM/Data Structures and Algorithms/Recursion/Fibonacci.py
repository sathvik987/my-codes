""" // Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N = 5 → 2+3

//For example: fibonacciRecursive(6) should return 8
 """


# my_sol
def fibonacciIterative(n):
    fib = [0, 1]
    i = 0
    j = 1
    for _ in range(2, n+1):
        c = i+j
        fib.append(c)
        i = j
        j = c
    return fib[n]


# O(n)
def fibonacciIterative2(n):
    arr = [0, 1]
    for i in range(2, n+1):
        arr.append(arr[i-2]+arr[i-1])

    return arr[n]


# O(2^n)
def fibonacciRecursive(n):
    if n < 2:
        return n
    return fibonacciRecursive(n-2)+fibonacciRecursive(n-1)


print(fibonacciIterative(7))
print(fibonacciIterative2(7))
print(fibonacciRecursive(7))
