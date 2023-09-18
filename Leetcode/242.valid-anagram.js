/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    /*     
    //It is slow, most probably n^2 because of replace method
    if (s.length !== t.length) {
            return false
        }
        for (let i = 0; i < s.length; i++) {
            let letter = s[i]
            t = t.replace(letter, '')
        }
        return t.length === 0 */

    if (s.length !== t.length) {
        return false
    }
    let repeatCount = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        repeatCount[s[i].charCodeAt(0) - 97]++
        repeatCount[t[i].charCodeAt(0) - 97]--
    }

    for (const count of repeatCount) {
        if (count !== 0) {
            return false
        }
    }

    return true
};

// @lc code=end

