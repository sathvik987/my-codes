const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        while (array[i - 1] > array[i]) {
            let temp = array[i]
            array[i] = array[i - 1]
            array[i - 1] = temp
            i = i - 1
        }
    }
    return array
}

insertionSort(numbers);
console.log(numbers);


//tc - O(n^2)
//sc - O(1)
