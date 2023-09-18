/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let leftP = 0;
    let rightP = numbers.length - 1;

    while (leftP < rightP) {
        let curValue = numbers[leftP] + numbers[rightP];
        if (curValue == target) {
            return [leftP + 1, rightP + 1];
        } else if (curValue > target) {
            rightP--;
        } else {
            leftP++;
        }
    }

};
// @lc code=end

