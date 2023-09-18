/*
 * @lc app=leetcode id=53 lang=javascript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let total = nums[0];
    let max = total;
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i]
        total = total + num
        if (num > total) {
            total = num
        }
        max = Math.max(max, total)
    }
    return max;
};

// @lc code=end



