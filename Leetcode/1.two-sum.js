/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let requiredValues = {}
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        if (requiredValues[element] !== undefined) {
            return [requiredValues[element], i]
        }
        requiredValues[target - element] = i
    }
    return null
}
// @lc code=end

