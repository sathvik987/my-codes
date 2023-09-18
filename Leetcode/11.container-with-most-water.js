/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (heights) {
    let leftP = 0;
    let rigthP = heights.length - 1;
    let max = 0;

    while (leftP < rigthP) {
        let height = Math.min(heights[leftP], heights[rigthP]);
        let width = rigthP - leftP;
        let area = height * width

        max = Math.max(max, area)

        if (heights[leftP] < heights[rigthP]) {
            leftP++
        } else {
            rigthP--
        }


    }

    return max;
};
// @lc code=end

