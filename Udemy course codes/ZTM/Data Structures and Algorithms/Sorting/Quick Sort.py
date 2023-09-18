def quickSort(array, left, right):

    if left < right:
        pivot = right
        partitionindex = partition(array, pivot, left, right)

        quickSort(array, left, partitionindex - 1)
        quickSort(array, partitionindex + 1, right)
    return array


def partition(array, pivot, left, right):
    pivotvalue = array[pivot]
    partitionindex = left

    for i in range(left, right):
        if array[i] < pivotvalue:
            swap(array, i, partitionindex)
            partitionindex += 1

    swap(array, right, partitionindex)
    return partitionindex


def swap(array, firstindex, secondindex):
    temp = array[firstindex]
    array[firstindex] = array[secondindex]
    array[secondindex] = temp


numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]

# Select first and last index as 2nd and 3rd parameters
print(quickSort(numbers, 0, len(numbers)-1))
# avg tc - O(n log n), worst - O(n^2)
# sc - O(log(n))
