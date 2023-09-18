//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2
// naive approach, has bugs for input ([2, 5, 5, 2, 3, 5, 1, 2, 4])

function firstRecurringCharacter(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if (input[i] === input[j]) {
                return input[i];
            }
        }
    }
    return undefined
}
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4]))

function firstRecurringCharacter2(input) {
    has_seen = {};
    n = input.length;
    for (let i = 0; i < n; i++) {
        if (has_seen[input[i]]) {
            return input[i]
        }
        has_seen[input[i]] = true
    }
}
//sc=O(n), tc=O(n) but naive approach (two for loops) has sc=O(1) tc=O(n^2)
console.log(firstRecurringCharacter2([2, 5, 5, 2, 3, 5, 1, 2, 4]))