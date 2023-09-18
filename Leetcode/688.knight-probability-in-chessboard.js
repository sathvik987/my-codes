/*
 * @lc app=leetcode id=688 lang=javascript
 *
 * [688] Knight Probability in Chessboard
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function (n, k, row, column) {
    const directions = [
        [-2, -1],
        [-2, 1],
        [-1, 2],
        [1, 2],
        [2, 1],
        [2, -1],
        [1, -2],
        [-1, -2]
    ];
    const recurse = (n, k, row, column, dp) => {
        if (row < 0 || column < 0 || row >= n || column >= n) {
            return 0
        }
        if (k === 0) {
            return 1
        }

        if (dp[k][row][column] !== undefined) {
            return dp[k][row][column]
        }
        let res = 0
        for (const dir of directions) {
            res = res + recurse(n, k - 1, row + dir[0], column + dir[1], dp) / 8
        }
        dp[k][row][column] = res
        return dp[k][row][column]
    }

    let dp = new Array(k + 1).fill().map(() => new Array(n).fill().map(() => new Array(n).fill()))
    return recurse(n, k, row, column, dp)
};
// @lc code=end
