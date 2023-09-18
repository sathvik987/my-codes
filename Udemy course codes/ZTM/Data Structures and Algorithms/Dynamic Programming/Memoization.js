/* def memoizedadd80():
    cache = {}

    def memoized(n):
        if n in cache:
            return cache[n]
        else:
            print('Long time')
            cache[n] = n+80
            return cache[n]
    return memoized


memo = memoizedadd80()
print(memo(7))
print(memo(7)) */

function memoizedadd80() {
    cache = {}

    function memorized(n) {
        if (cache[n]) {
            return cache[n]
        }
        else {
            console.log("long time")
            cache[n] = n + 80
            return cache[n]
        }
    }

    return memorized

}

let memo = memoizedadd80()
console.log(memo(7))
console.log(memo(7))