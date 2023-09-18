num = [88, 5, 8, 3, 6, 2, 1, 7, 4, 666, 55, 21]


# my_sol
def bubbleSort(arr):
    size = len(arr)
    for i in range(0, size):
        for j in range(0, size-i-1):
            if arr[j] > arr[j+1]:
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp

    return arr


print(bubbleSort(num))


#tc - O(n^2)
#sc - O(1)
