/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) {
            return true
        }
        seen.add(num)
    }
    return false
};
// @lc code=end

