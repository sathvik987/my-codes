/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} costs
 * @return {number}
 */
var minCostClimbingStairs = function (costs) {
    //Top down
    /*     const calculateMinCostClimbingStairs = (costs, index, seen) => {
            if (index < 0) {
                return 0
            }
            if (index === 0 || index === 1) {
                return costs[index]
            }
            let currentCost = costs[index];
            //Because we start from finish, that is outside the array
            if (!currentCost) {
                currentCost = 0
            }
            if (seen[index] !== undefined) {
                return seen[index]
            } else {
                seen[index] = currentCost + Math.min(calculateMinCostClimbingStairs(costs, index - 1, seen),
                    calculateMinCostClimbingStairs(costs, index - 2, seen))
                return seen[index]
            }
        }
    
        return calculateMinCostClimbingStairs(costs, costs.length, {}) */

    //Bottom up
    /*     let dp = [];
        let n = costs.length
        for (let index = 0; index < n; index++) {
            if (index < 2) {
                dp[index] = costs[index]
            } else {
                dp[index] = costs[index] + Math.min(dp[index - 1], dp[index - 2])
            }
    
        }
    
        return Math.min(dp[n - 1], dp[n - 2]) */

    let first = costs[0];
    let second = costs[1]

    for (let i = 2; i < costs.length; i++) {
        let current = costs[i] + Math.min(first, second);
        first = second;
        second = current
    }
    return Math.min(first, second)
};
// @lc code=end

