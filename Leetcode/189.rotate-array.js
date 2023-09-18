/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k = k % nums.length; //Use remainder to normalize (bring it inside array) 
    reverce(0, nums.length - 1, nums);
    reverce(k, nums.length - 1, nums);
    reverce(0, k - 1, nums);

};

let reverce = function (s, e, arr) {
    while (s < e) {
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        s++
        e--
    }
}
// @lc code=end


