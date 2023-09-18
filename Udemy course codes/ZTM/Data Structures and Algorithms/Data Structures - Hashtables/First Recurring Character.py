""" //Google Question
//Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]:
//It should return 2

//Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4]:
//It should return 1

//Given an array = [2, 3, 4, 5]:
//It should return undefined

//Bonus... What if we had this:
// [2, 5, 5, 2, 3, 5, 1, 2, 4]
// return 5 because the pairs are before 2, 2
 """

# naive approach, has bugs for input ([2, 5, 5, 2, 3, 5, 1, 2, 4])


def firstRecurringCharacter1(input):
    for i in range(0, len(input)):
        for j in range(i+1, len(input)):
            if input[i] == input[j]:
                return input[i]

    return None


print(firstRecurringCharacter1([2, 5, 1, 2, 3, 5, 1, 2, 4]))

# Better


def firstRecurringCharacter(input):
    has_seen = {}
    for i in input:
        # if has_seen[i] doesn't exists it gives error but it returns undefined in javascript.so use .get()method.
        if has_seen.get(i) == True:
            return i
        has_seen[i] = True
    return None


# sc=O(n), tc=O(n) but naive approach (two nested for loops) has sc=O(1) tc=O(n^2)
print(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]))
