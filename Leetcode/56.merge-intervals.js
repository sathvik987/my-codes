/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length <= 1) {
        return intervals
    }
    intervals = intervals.sort((a, b) => a[0] - b[0])
    let result = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        const element = intervals[i];
        if (result[result.length - 1][1] >= element[0]) {
            result[result.length - 1][1] = Math.max(result[result.length - 1][1], element[1])
        } else {
            result.push(element)
        }
    }
    return result
};
// @lc code=end

