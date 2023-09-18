# O(n)
def search(arr, x):

    for i in range(len(arr)):

        if arr[i] == x:
            return i

    return -1


arr = [9, 6, 4, 3, 27, 6, 533, 6657]
print(search(arr, 4))
