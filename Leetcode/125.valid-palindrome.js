/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let p1 = 0
    let p2 = s.length - 1
    while (p1 < p2) {
        if (s[p1] !== s[p2]) {
            return false
        }
        p1++
        p2--
    }
    return true
};
// @lc code=end

