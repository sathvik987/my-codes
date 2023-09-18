/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    /*     let hashTable = {};
        let majorityEle = 0;
        let majorityCount = 0;
        for (let n of nums) {
            if (hashTable[n] == undefined) {
                hashTable[n] = 1;
            } else {
                hashTable[n] = hashTable[n] + 1;
            }
            if (hashTable[n] > majorityCount) {
                majorityCount = hashTable[n];
                majorityEle = n;
            }
        }
    
        return majorityEle; */

    //Moore voting alg ( T - O(n), S - O(1) )
    let majorityEle = 0;
    let majorityCount = 0;
    for (let n of nums) {
        if (majorityCount == 0) {
            majorityEle = n
        }

        if (majorityEle == n) {
            majorityCount++
        } else {
            majorityCount--
        }
    }

    return majorityEle;
};
// @lc code=end

