/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let commonPrefix = strs[0]
    for (let i = 1; i < strs.length; i++) {
        let str = strs[i];
        let prefix = ""
        let p1 = 0
        let p2 = 0
        while (p2 < str.length) {
            if (commonPrefix[p1] == str[p2]) {
                prefix = prefix + str[p2]
                p1++
                p2++
            } else {
                break
            }
        }
        commonPrefix = prefix
        if (!commonPrefix) {
            return commonPrefix
        }
    }
    return commonPrefix
};
// @lc code=end

