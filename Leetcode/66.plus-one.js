/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    /* return String(BigInt(digits.join("")) + 1n).split("") */
    let i = digits.length - 1;
    if (digits[i] === 9) {
        while (digits[i] === 9) {
            digits[i] = 0
            i--
        }
        if (i < 0) {
            digits.unshift(1);
        } else {
            digits[i]++
        }
    } else {
        digits[i]++
    }
    return digits
};
// @lc code=end

