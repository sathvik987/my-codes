/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 2) {
        return n
    }
    let first = 1
    let second = 1
    for (let i = 2; i < n; i++) {
        let third = first + second;
        first = second
        second = third
    }

    return first + second
};


// @lc code=end

