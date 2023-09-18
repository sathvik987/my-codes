/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {




    /*     let i = 0;
              let len = nums.length;
              let counter = 0;
              while (i < len) {
                  if (counter > len) {
                      break;
                  }
                  if (nums[i] == 0) {
                      nums.splice(i, 1);
                      nums.push(0)
                  }
          
                  if (nums[i] != 0) {
                      i++
                  }
          
          
                  counter++;
              } */


    /*     for (let i = 0; i < nums.length; i++) {
            const element = nums[i];
            if (element === 0) {
                let j = i + 1
                while (nums[i] === 0 && j < nums.length) {
                    let temp = nums[j]
                    nums[j] = nums[i]
                    nums[i] = temp
                    j++
                }
            }
        }
        return nums
     */

    let leftP = 0;
    let rightP = 0;

    let len = nums.length;

    while (rightP < len) {
        if (nums[rightP] == 0) {
            rightP++;
        } else {
            let temp = nums[leftP];
            nums[leftP] = nums[rightP];
            nums[rightP] = temp;
            leftP++;
            rightP++;
        }

    }

};








// @lc code=end
