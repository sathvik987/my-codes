/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbols = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let ans = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        let symbol = s[i]
        let value = symbols[symbol]
        let subtract = false;
        if (symbol == 'I' && (s[i + 1] == 'V' || s[i + 1] == 'X')) {
            subtract = true;
        } else if (symbol == 'X' && (s[i + 1] == 'L' || s[i + 1] == 'C')) {
            subtract = true;
        } else if (symbol == 'C' && (s[i + 1] == 'D' || s[i + 1] == 'M')) {
            subtract = true;
        }

        if (subtract) {
            ans = ans - value
        } else {
            ans = ans + value
        }
    }

    return ans;
};

// @lc code=end

