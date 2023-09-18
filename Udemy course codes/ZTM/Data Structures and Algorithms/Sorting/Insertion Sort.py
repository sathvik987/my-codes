num = [88, 5, 8, 3, 6, 2, 1, 7, 4, 666, 55, 21]


def insertionSort(arr):
    for i in range(1, len(arr)):
        # i>0 is used because python allows negative index
        while arr[i-1] > arr[i] and i > 0:
            temp = arr[i]
            arr[i] = arr[i-1]
            arr[i-1] = temp
            i = i-1

    return arr


print(insertionSort(num))

#tc - O(n^2)
#sc - O(1)
