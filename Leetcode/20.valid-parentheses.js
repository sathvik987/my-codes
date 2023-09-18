/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    }

    let stack = [];

    for (let i = 0; i < s.length; i++) {
        let element = s[i];

        if (element === '(' || element === '{' || element === '[') {
            stack.push(element)
        } else {
            let lastOpeningBracket = stack.pop();
            if (lastOpeningBracket !== brackets[element]) {
                return false
            }
        }

    }

    return stack.length === 0
};
// @lc code=end

