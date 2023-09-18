/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    /*     let seen = {};
        for (let i = 0; i < s.length; i++) {
            const letter = s[i];
            if (seen[letter] === undefined) {
                seen[letter] = [1, i]
            } else {
                seen[letter][0]++
            }
        }
    
        for (const entry of Object.values(seen)) {
            let count = entry[0]
            let index = entry[1]
            if (count === 1) {
                return index
            }
        }
    
        return -1 */

    let seen = new Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        seen[letter.charCodeAt(0) - 97]++
    }

    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (seen[letter.charCodeAt(0) - 97] === 1) {
            return i
        }
    }

    return -1
};

// @lc code=end

