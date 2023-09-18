/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
 
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

Constraints:
    2 <= nums.length <= 10^3
    -10^9 <= nums[i] <= 10^9
    -10^9 <= target <= 10^9
    Only one valid answer exists.

 */


const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;

// Two pointer technique
// T - O(n^2)
// S - O(1)
const findTwoSum = function (nums, target) {
    for (let p1 = 0; p1 < nums.length; p1++) {

        const numberToFind = target - nums[p1];

        for (let p2 = p1 + 1; p2 < nums.length; p2++) {
            if (numberToFind === nums[p2]) {
                return [p1, p2];
            }
        }
    }

    return null;
};

console.log(findTwoSum(numsArray, targetToFind));



//Optimal Solution 
//Space complexity is increased to increase speed 
// T - O(n)
// S - O(n)
const numsArray2 = [1, 3, 7, 9, 2];
const targetToFind2 = 11;

const findTwoSum2 = function (nums, target) {
    const numsMap = {};

    for (let p = 0; p < nums.length; p++) {
        const currentMapVal = numsMap[nums[p]];

        if (currentMapVal >= 0) {
            return [currentMapVal, p];
        } else {
            const numberToFind = target - nums[p];
            numsMap[numberToFind] = p;
        }
    }

    return null;
}

console.log(findTwoSum2(numsArray2, targetToFind2));