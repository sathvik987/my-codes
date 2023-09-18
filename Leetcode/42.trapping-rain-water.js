/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let p1 = 0
    let p2 = height.length - 1
    let total = 0
    let leftWall = 0;
    let rightWall = 0;
    while (p1 < p2) {
        if (height[p1] <= height[p2]) {
            if (height[p1] > leftWall) {
                leftWall = height[p1]
            } else {
                let water = leftWall - height[p1]
                total = total + water
            }
            p1++
        } else {
            if (height[p2] > rightWall) {
                rightWall = height[p2]
            } else {
                let water = rightWall - height[p2]
                total = total + water
            }
            p2--
        }
    }
    return total
};
// @lc code=end

