/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let maxLen = 0
    let p1 = 0
    let p2 = 0
    let seen = {}
    while (p2 < s.length) {
        let element = s[p2]
        if (seen[element] !== undefined) {
            if (seen[element] >= p1) {
                p1 = seen[element] + 1
            }
        }
        seen[element] = p2
        let count = (p2 - p1) + 1
        maxLen = Math.max(maxLen, count)
        p2++
    }

    return maxLen
};
// @lc code=end

