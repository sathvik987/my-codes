/* Find the kth largest element in an unsorted array.
 Note that it is the kth largest element in the sorted order, not the kth distinct element.

Example 1:

Input: [3,2,1,5,6,4] and k = 2
Output: 5

Example 2:

Input: [3,2,3,1,2,4,5,5,6] and k = 4
Output: 4

Note:
You may assume k is always valid, 1 ≤ k ≤ array's length.
 */
let input = [3, 2, 1, 5, 6, 4], K = 2;


var findKthLargest = function (nums, k) {
    let sortedArray = nums.sort((a, b) => a - b)
    return sortedArray[nums.length - k]
};
// ---------------------------------------------------------------------------------------------------------------------------
// T - O(n log(n))
// S - O(log n)
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

var findKthLargest2 = function (nums, k) {
    const indexToFind = nums.length - k;
    quickSort(nums, 0, nums.length - 1);
    return nums[indexToFind]
};

//-----------------------------------------------------------------------------------------------------------------------------------------
// n + n/2 + n/4 + n/8.......... = O(2n)
// T - Best - O(n) , Worst - O(n^2) for nums like [5,4,3,2,1]
// S - can be O(1) because of tail recursion

const quickSelect = function (nums, left, right, indexToFind) {
    const partitionIndex = getPartition(nums, left, right);

    if (partitionIndex === indexToFind) {
        return nums[partitionIndex];
    } else if (indexToFind < partitionIndex) {
        return quickSelect(nums, left, partitionIndex - 1, indexToFind);
    } else {
        return quickSelect(nums, partitionIndex + 1, right, indexToFind);
    }

};
var findKthLargest3 = function (nums, k) {
    const indexToFind = nums.length - k;
    return quickSelect(nums, 0, nums.length - 1, indexToFind);
};

console.log(findKthLargest(input, K))
console.log(findKthLargest2(input, K))
console.log(findKthLargest3(input, K))
