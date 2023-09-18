/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let maxP = 0;
    let stock = prices[0]
    for (let i = 1; i < prices.length; i++) {
        const price = prices[i];
        if (price < stock) {
            stock = price
        } else {
            let profit = price - stock
            maxP = Math.max(profit, maxP)
        }
    }

    return maxP
};
// @lc code=end

