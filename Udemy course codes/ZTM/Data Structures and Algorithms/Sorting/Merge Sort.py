
arr = [99, 44, 5, 100, 6, 7]


def mergesort(arr):
    if len(arr) == 1:
        return arr
    length = len(arr)
    mid = length // 2
    left = arr[:mid]
    right = arr[mid:]
    print('Left {}'.format(left))
    print('Right {}'.format(right))

    return merge(mergesort(left), mergesort(right))


def merge(left, right):
    result = []
    leftindex = 0
    rightindex = 0
    while leftindex < len(left) and rightindex < len(right):
        if left[leftindex] < right[rightindex]:
            result.append(left[leftindex])
            leftindex += 1
        else:
            result.append(right[rightindex])
            rightindex += 1
    print(left, right)
    print(result + left[leftindex:] + right[rightindex:])
    return result + left[leftindex:] + right[rightindex:]


x = mergesort(arr)
print(f'Ans: {x}')
# tc - O(n log n)
# sc - O(n)
