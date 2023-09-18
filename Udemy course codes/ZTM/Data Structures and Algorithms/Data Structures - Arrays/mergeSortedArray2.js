function mergeSortedArray2(array1, array2) {
    if (array1.length === 0 || array2.length === 0) {
        return array1.concat(array2)
    }

    let i = 0, j = 0
    let sortedArray = []

    while (i < array1.length && j < array2.length) {
        if (array1[i] <= array2[j]) {
            sortedArray.push(array1[i])
            i++
        } else {
            sortedArray.push(array2[j])
            j++
        }
    }

    return sortedArray.concat(array1.slice(i)).concat(array2.slice(j))
}

let a = [2, 3, 4, 5, 6, 9, 11, 76]
let b = [1, 3, 4, 6, 20]
console.log(mergeSortedArray2([0, 3, 4], [3, 4, 6, 30]))
console.log(mergeSortedArray2(a, b))
console.log(mergeSortedArray2([], [3, 4, 6, 30]))
console.log(mergeSortedArray2([0, 3, 4], []))
