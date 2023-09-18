/* Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions )
so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

    It is the empty string, contains only lowercase characters, or
    It can be written as AB (A concatenated with B), where A and B are valid strings, or
    It can be written as (A), where A is a valid string.



Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.

Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"

Example 3:

Input: s = "))(("
Output: ""
Explanation: An empty string is also valid.

Example 4:

Input: s = "(a(b(c)d)"
Output: "a(b(c)d)"


Constraints:

    1 <= s.length <= 10^5
    s[i] is one of  '(' , ')' and lowercase English letters.
 */

// T - O(n)
// S - O(n)
const str = "(ab(c)d"
const str2 = "a)bc(d)"
const str3 = "))(("
var minRemoveToMakeValid = function (s) {

    let arrayStr = s.split("")
    let stack = []

    for (let i = 0; i < arrayStr.length; i++) {
        if (arrayStr[i] === '(') {
            stack.push(i)
        } else if (arrayStr[i] === ')') {
            if (stack.length === 0) {
                arrayStr[i] = ""         //delete arrayStr[i]
            } else {
                stack.pop()
            }
        }
    }

    while (stack.length) {
        arrayStr[stack.pop()] = ""
    }

    return arrayStr.join("")

};

console.log(minRemoveToMakeValid(str))
console.log(minRemoveToMakeValid(str2))
console.log(minRemoveToMakeValid(str3))