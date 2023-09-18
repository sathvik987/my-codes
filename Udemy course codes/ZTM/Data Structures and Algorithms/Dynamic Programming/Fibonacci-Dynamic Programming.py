""" //0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233..."""


counter = 0


def fib1(n):
    global counter
    counter = counter+1
    if (n < 2):
        return n
    return fib1(n-1)+fib1(n-2)


print(f"Normal: {fib1(13)}, {counter} operation")


counter1 = 0


# closure
# O(n) but takes more memory
def fibMaster():
    cache = {}

    def fib2(n):
        global counter1
        counter1 += 1
        if n in cache:
            return cache[n]
        else:
            if n < 2:
                return n
            else:
                cache[n] = fib2(n-1)+fib2(n-2)
                return cache[n]
    return fib2


fasterFib = fibMaster()

print(f"Dp: {fasterFib(13)}, {counter1} operation")


# bottom up approach

counter3 = 0


def fib3(n):
    global counter3
    ans = [0, 1]
    for i in range(2, n+1):
        counter3 += 1
        ans.append(ans[i-2]+ans[i-1])
    return ans.pop()


print(f"Dp2: {fib3(13)}, {counter3} operation")
