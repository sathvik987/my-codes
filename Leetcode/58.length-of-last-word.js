/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let arrayOfWords = s.split(" ").filter((w) => w.length > 0);
    return arrayOfWords[arrayOfWords.length - 1].length;
};


// @lc code=end

