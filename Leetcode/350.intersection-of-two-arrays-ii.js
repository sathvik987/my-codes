/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let seen = {}
    let ans = []
    for (const n of nums1) {
        if (seen[n] === undefined) {
            seen[n] = 1
        } else {
            seen[n]++
        }
    }
    for (const n of nums2) {
        if (seen[n]) {
            ans.push(n)
        }
        seen[n]--
        if (seen[n] === 0) {
            delete seen[n]
        }
    }
    return ans
};

// @lc code=end

