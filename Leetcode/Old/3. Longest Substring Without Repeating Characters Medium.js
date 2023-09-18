/* Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

Example 4:

Input: s = ""
Output: 0

Constraints:

    0 <= s.length <= 5 * 10^4
    s consists of English letters, digits, symbols and spaces.

 */

// T - O(n^2)
// S - O(n)
const str2 = "abcabcbb"
var lengthOfLongestSubstring2 = function (s) {
    let maxlen = 0
    for (let i = 0; i < s.length; i++) {
        let len = 0
        let hash = {}
        for (let j = i; j < s.length; j++) {
            if (hash[s[j]]) {
                break
            }
            hash[s[j]] = true
            len++
            maxlen = Math.max(maxlen, len)

        }

    }

    return maxlen


};

console.log(lengthOfLongestSubstring2(str2))



const str = "abcbdaac"

/* Sliding window technique - Form a window over some portion of sequential data, then move that window through the data to capture 
different parts of it */
// T - O(n)
// S - O(n)
// You can use Map in js to improve speed. check out video
var lengthOfLongestSubstring = function (s) {

    let maxlen = 0, left = 0, seen = {};
    for (let right = 0; right < s.length; right++) {
        let currentitem = s[right]
        if (seen[currentitem] >= left) {  //to make sure that item is inside window
            left = seen[currentitem] + 1
        }
        seen[currentitem] = right
        maxlen = Math.max(maxlen, right - left + 1)  // plus 1 because array index starts at 0

    }

    return maxlen

};

console.log(lengthOfLongestSubstring(str))


