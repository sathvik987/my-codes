/* Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

Constraints:

    0 <= nums.length <= 10^5
    -10^9 <= nums[i] <= 10^9
    nums is a non-decreasing array.
    -10^9 <= target <= 10^9
 */

// T - O(log n)
// S - O(1)
let n = [1, 2, 3, 4, 4, 4, 4, 7, 8, 9], t = 4;


const binarySearch = (nums, left, right, target) => {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const foundVal = nums[mid];
        if (foundVal === target) {
            return mid;
        } else if (foundVal < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};


var searchRange = function (nums, target) {
    if (nums.length < 1) return [-1, -1];
    const firstPos = binarySearch(nums, 0, nums.length - 1, target);

    if (firstPos === -1) return [-1, -1];
    let endPos = firstPos,
        startPos = firstPos,
        temp1,
        temp2;

    while (startPos !== -1) {
        temp1 = startPos;
        startPos = binarySearch(nums, 0, startPos - 1, target);
    }
    startPos = temp1;

    while (endPos !== -1) {
        temp2 = endPos;
        endPos = binarySearch(nums, endPos + 1, nums.length - 1, target);
    }
    endPos = temp2;

    return [startPos, endPos];
}

console.log(searchRange(n, t))

