/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let isNegativeNum = x < 0;
    let num = String(x).split("");
    if (isNegativeNum) {
        num[0] = ""
    }
    let i = 0
    let j = num.length - 1
    while (i < j) {
        let temp = num[i]
        num[i] = num[j]
        num[j] = temp
        i++
        j--
    }
    num = num.join("")
    if (isNegativeNum) {
        num = "-" + num
    }
    return Number(num)
};

// @lc code=end

