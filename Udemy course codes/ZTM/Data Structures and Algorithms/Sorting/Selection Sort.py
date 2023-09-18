num = [88, 5, 8, 3, 6, 2, 1, 7, 4, 666, 55, 21]


def selectionSort(arr):
    for i in range(0, len(arr)):
        min_value_index = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[min_value_index]:
                min_value_index = j

        if min_value_index != i:
            temp = arr[i]
            arr[i] = arr[min_value_index]
            arr[min_value_index] = temp

    return arr


print(selectionSort(num))

#tc - O(n^2)
#sc - O(1)
