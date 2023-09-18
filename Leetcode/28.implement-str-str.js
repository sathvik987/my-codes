/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (!haystack || !needle) {
        return 0
    }
    let firstLetter = needle[0];
    for (let i = 0; i < haystack.length; i++) {
        const element = haystack[i];
        if (element === firstLetter) {
            let p1 = i;
            let p2 = 0;
            let notFound = false;
            while (p2 < needle.length) {
                if (haystack[p1] === needle[p2]) {
                    p1++
                    p2++
                } else {
                    notFound = true
                    break;
                }
            }
            if (notFound) {
                continue
            } else {
                return i
            }
        }
    }

    return -1
};
// @lc code=end

