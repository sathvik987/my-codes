/* On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps.
You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

Example 1:

Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is start on cost[1], pay that cost and go to the top.

Example 2:

Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].

Note:

    cost will have a length in the range [2, 1000].
    Every cost[i] will be an integer in the range [0, 999].
 */

// T - O(2^n)
// S - O(2^n)
let inputCost = [5, 10, 6, 25, 2, 50]
var minCostClimbingStairs2 = function (cost) {
    let n = cost.length
    return Math.min(minCost2(n - 1, cost), minCost2(n - 2, cost))
}
function minCost2(i, cost) {
    if (i < 0) return 0
    if (i === 1 || i === 0) return cost[i]

    return cost[i] + Math.min(minCost2(i - 1, cost), minCost2(i - 2, cost))
}
console.log(minCostClimbingStairs2(inputCost))

// TopDown
// T - O(n)
// S - O(n)
var minCostClimbingStairs3 = function (cost) {
    let n = cost.length
    let memory = [] // {} also works
    return Math.min(minCost3(n - 1, cost, memory), minCost3(n - 2, cost, memory))
}
function minCost3(i, cost, memory) {
    if (i < 0) return 0
    if (i === 1 || i === 0) return cost[i]

    if (memory[i]) return memory[i]

    memory[i] = cost[i] + Math.min(minCost3(i - 1, cost, memory), minCost3(i - 2, cost, memory))

    return memory[i]
}
console.log(minCostClimbingStairs3(inputCost))

// BottomUp
// T - O(n)
// S - O(n)
var minCostClimbingStairs4 = function (cost) {
    let dp = []
    let n = cost.length
    for (let i = 0; i < n; i++) {
        if (i < 2) {
            dp[i] = cost[i]
        } else {
            dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
        }
    }

    return Math.min(dp[n - 1], dp[n - 2])

}

console.log(minCostClimbingStairs4(inputCost))

// T - O(n)
// S - O(1)
var minCostClimbingStairs = function (cost) {
    const n = cost.length;
    if (n === 0) return 0;
    if (n === 1) return cost[0];
    let dpOne = cost[0];
    let dpTwo = cost[1];
    for (let i = 2; i < n; i++) {
        const current = cost[i] + Math.min(dpOne, dpTwo);
        dpOne = dpTwo;
        dpTwo = current;
    }

    return Math.min(dpOne, dpTwo);
}

console.log(minCostClimbingStairs(inputCost))      