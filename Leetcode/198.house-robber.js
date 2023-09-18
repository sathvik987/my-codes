/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length === 0) {
        return 0
    }
    if (nums.length === 1) {
        return nums[0];
    }
    if (nums.length === 2) {
        return Math.max(nums[0], nums[1]);
    }

    let len = nums.length;
    let dp = [nums[0]];
    dp.push(Math.max(nums[0], nums[1]))
    for (let i = 2; i < len; i++) {
        const amount = nums[i];
        dp.push(Math.max(dp[i - 2] + amount, dp[i - 1]))
    }

    return dp[len - 1]
};
// @lc code=end

