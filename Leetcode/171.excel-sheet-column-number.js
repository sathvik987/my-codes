/*
 * @lc app=leetcode id=171 lang=javascript
 *
 * [171] Excel Sheet Column Number
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let num = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let alphabet = columnTitle[i];
        num = num * 26 + (alphabet.toLowerCase().charCodeAt(0) - 97 + 1)
    }
    return num
};
// @lc code=end

