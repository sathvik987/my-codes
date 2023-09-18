/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    /*     let hashTable = {};
        for (let i = 0; i < nums.length; i++) {
            if (hashTable[nums[i]] != undefined) {
                delete hashTable[nums[i]]
            } else {
                hashTable[nums[i]] = true;
            }
        }
    
        return Object.keys(hashTable)[0]; */

    //Using xor, same elements cancels itself

    let result = 0;

    for (let num of nums) {
        result = result ^ num;
    }

    return result;
};

// @lc code=end

