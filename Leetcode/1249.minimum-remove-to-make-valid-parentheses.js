/*
 * @lc app=leetcode id=1249 lang=javascript
 *
 * [1249] Minimum Remove to Make Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function (s) {
    let array = s.split("")
    let stack = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element === '(') {
            stack.push(i)
        } else if (element === ')') {
            if (stack.length === 0) {
                array[i] = ""
            } else {
                stack.pop()
            }
        }
    }

    for (let i = 0; i < stack.length; i++) {
        let index = stack[i];
        array[index] = ""
    }

    return array.join("")
};

// @lc code=end

