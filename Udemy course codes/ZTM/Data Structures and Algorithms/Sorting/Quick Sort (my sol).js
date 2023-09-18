
class Sort {
    #getPartition(arr, start, end) {
        let pivotValue = arr[end];
        let p1 = start;
        let p2 = end;

        while (p1 < p2) {
            if (arr[p1] <= pivotValue) {
                p1++;
            } else {
                let temp = arr[p1];
                arr[p1] = arr[p2 - 1];
                arr[p2 - 1] = pivotValue;
                arr[p2] = temp;
                p2--;
            }
        }
        return p2;
    }
    #quickSortMethod(arr, start, end) {
        if (start < end) {
            let partition = this.#getPartition(arr, start, end);
            this.#quickSortMethod(arr, start, partition - 1);
            this.#quickSortMethod(arr, partition + 1, end);
        }
    }
    quickSort(arr) {
        if (arr.length > 1) {
            this.#quickSortMethod(arr, 0, arr.length - 1);
            return arr;
        } else {
            return arr;
        }
    }
}

let sort = new Sort();

console.log(sort.quickSort([]));
console.log(sort.quickSort([5]));
console.log(sort.quickSort([1, 2, 3, 5, 6, 9, 0, 55, 43, 22, 12, 9, 6, 5, 33, 5, 88, 24, 56, 93]));
console.log(sort.quickSort([99, 77, 55, 44, 3]))

