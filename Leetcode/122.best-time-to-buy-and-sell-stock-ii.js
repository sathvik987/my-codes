/*
 * @lc app=leetcode id=122 lang=javascript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let totalProfit = 0;
    let currentStock = null;
    for (let i = 0; i < prices.length; i++) {
        const price = prices[i];
        if (currentStock === null) {
            currentStock = price
        }
        let nextPrice = prices[i + 1]
        if (nextPrice == undefined || nextPrice < price) {
            let profit = price - currentStock
            totalProfit = totalProfit + profit
            currentStock = null
        }
    }

    return totalProfit
};


// @lc code=end

