/* Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.



Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

Example 4:

Input: s = "([)]"
Output: false

Example 5:

Input: s = "{[]}"
Output: true


Constraints:

    1 <= s.length <= 10^4
    s consists of parentheses only '()[]{}'.

 */

/**
 * @param {string} s
 * @return {boolean}
 */

// T - O(n)
// S - O(n)
let str = "()[]{}"

const parens = {
    '(': ')',
    '{': '}',
    '[': ']'
}

var isValid = function (s) {
    if (s.length === 0) return true;

    const stack = [];

    for (let i = 0; i < s.length; i++) {
        if (parens[s[i]]) {
            stack.push(s[i]);
        } else {
            const leftBracket = stack.pop();
            const correctBracket = parens[leftBracket];
            if (s[i] !== correctBracket) return false
        }
    }

    return stack.length === 0;

};

console.log(isValid(str))




// T - O(n)
// S - O(n)
// my_sol
var isValid2 = function (s) {
    let stack = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stack.push(s[i])

        } else if (s[i] === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop()
            } else {
                return false
            }
        } else if (s[i] === ']') {
            if (stack[stack.length - 1] === '[') {
                stack.pop()
            } else {
                return false
            }
        } else if (s[i] === '}') {
            if (stack[stack.length - 1] === '{') {
                stack.pop()
            } else {
                return false
            }
        }
    }

    if (stack.length === 0) {
        return true
    } else {
        return false
    }


};

console.log(isValid2(str))