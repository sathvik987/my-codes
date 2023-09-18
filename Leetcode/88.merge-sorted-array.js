/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let i = m + n - 1
    if (p1 < 0) {
        p1 = 0
    }
    while (p2 >= 0) {
        if (nums2[p2] > nums1[p1]) {
            nums1[i] = nums2[p2]
            i--
            p2--
        } else {
            nums1[i] = nums1[p1]
            p1--
            i--
        }
    }
};

// @lc code=end

