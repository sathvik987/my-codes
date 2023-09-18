//avg tc - O(n log n), worst - O(n^2) (worst case ex is =[9,8,7,6,4,3,2])
// sc - O(log(n))

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];


const getPartition = function (nums, left, right) {
    let i = left;

    for (let j = left; j < right; j++) {
        if (nums[j] < nums[right]) {
            let temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
    }
    let temp = nums[i];
    nums[i] = nums[right];
    nums[right] = temp;
    return i;
};

const quickSort = function (nums, left, right) {
    if (left < right) {
        const partitionIndex = getPartition(nums, left, right);

        quickSort(nums, left, partitionIndex - 1);
        quickSort(nums, partitionIndex + 1, right);
    }
};

quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);