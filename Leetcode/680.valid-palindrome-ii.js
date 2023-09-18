/*
 * @lc app=leetcode id=680 lang=javascript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    let left = 0;
    let right = s.length - 1;

    let isPalindrome = (l, r) => {
        while (l < r) {
            if (s[l] != s[r]) {
                return false
            } else {
                l++
                r--
            }
        }

        return true
    }

    while (left < right) {
        if (s[left] != s[right]) {
            return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
        } else {
            left++
            right--
        }

    }

    return true

};


// @lc code=end

