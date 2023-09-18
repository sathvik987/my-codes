/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Check ZTM Solution
var searchRange = function (nums, target) {

    const binarySearch = (array, target, left, right) => {
        while (left <= right) {
            let mid = Math.floor((left + right) / 2);
            let item = array[mid];
            if (item === target) {
                return mid
            } else if (item < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        return -1
    }

    if (nums.length === 0) {
        return [-1, -1]
    }

    let index = binarySearch(nums, target, 0, nums.length - 1);

    if (index === -1) {
        return [-1, -1]
    }

    let leftIndex = index, rightIndex = index;

    while (true) {
        let index = binarySearch(nums, target, 0, leftIndex - 1)
        if (index > -1) {
            leftIndex = index
        } else {
            break;
        }
    }

    while (true) {
        let index = binarySearch(nums, target, rightIndex + 1, nums.length - 1)
        if (index > -1) {
            rightIndex = index
        } else {
            break;
        }
    }

    return [leftIndex, rightIndex]
};
// @lc code=end
