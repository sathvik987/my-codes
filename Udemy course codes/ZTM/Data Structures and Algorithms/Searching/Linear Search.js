function search(arr, x) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === x) {
            return i
        }
    }
    return -1
}


let arr = [9, 6, 4, 3, 27, 6, 533, 6657];
console.log(search(arr, 4))
console.log(search(arr, 66))
