/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let resLeft = 0;
    let resRight = 0;
    let resLength = 0;

    for (let i = 0; i < s.length; i++) {
        let l = i;
        let r = i;
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            if ((r - l) + 1 > resLength) {
                resLength = (r - l) + 1;
                resLeft = l
                resRight = r
            }
            l--
            r++
        }

        l = i;
        r = i + 1;
        while (l >= 0 && r < s.length && s[l] == s[r]) {
            if ((r - l) + 1 > resLength) {
                resLength = (r - l) + 1;
                resLeft = l
                resRight = r
            }
            l--
            r++
        }
    }

    let result = "";
    for (let i = resLeft; i <= resRight; i++) {
        result = result + s[i]
    }

    return result

};

// @lc code=end

