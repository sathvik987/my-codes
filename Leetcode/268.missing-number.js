/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    // Using carl gauss formula
    let total = 0;
    let n = nums.length;
    let expectedTotal = n * (n + 1) / 2;

    for (let i = 0; i < n; i++) {
        total = total + nums[i]
    }

    return expectedTotal - total;


    /*  let n = nums.length;
        let hashTable = {}
        for (let i = 0; i <= n; i++) {
            hashTable[i] = true;
        }
        for (let num of nums) {
            if (hashTable[num] != undefined) {
                delete hashTable[num];
            }
        }
    
        return Object.keys(hashTable)[0]; */


    /*     let n = nums.length;
           let hashMap = {};
           for (let n of nums) {
               hashMap[n] = true;
           }
       
           for (let i = 0; i <= n; i++) {
               if (hashMap[i] == undefined) {
                   return i;
               }
           }
       
           return -1; */

};
// @lc code=end

