// T - O(log n), S - O(1)
let n = [5, 6, 8, 9, 10, 33, 45], t = 9;
function binarySearch(array, target) {
    let left = 0, right = array.length - 1
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midValue = array[mid]
        if (midValue === target) {
            return mid
        } else if (midValue < target) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    return null
}

function binarySearchR(array, left, right, target) {
    if (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] === target) {
            return mid
        } else if (array[mid] < target) {
            return binarySearchR(array, mid + 1, right, target)
        } else {
            return binarySearchR(array, left, mid - 1, target)
        }
    } else {
        return null
    }
}


console.log(binarySearch(n, 33))
console.log(binarySearchR(n, 0, n.length - 1, t))