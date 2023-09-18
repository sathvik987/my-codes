/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    let islands = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            const element = grid[i][j];
            if (element == "1") {
                islands++
                let queue = []
                grid[i][j] = "0"
                queue.push([i, j])
                while (queue.length) {
                    let curr = queue.shift()
                    let row = curr[0]
                    let col = curr[1]
                    for (const direction of directions) {
                        let nextRow = row + direction[0]
                        let nextCol = col + direction[1]
                        if (nextRow < 0 || nextCol < 0 || nextRow == grid.length || nextCol == grid[0].length) {
                            continue;
                        } else {
                            if (grid[nextRow][nextCol] === "1") {
                                grid[nextRow][nextCol] = "0"
                                queue.push([nextRow, nextCol])
                            }
                        }
                    }
                }
            }
        }
    }

    return islands
};


// @lc code=end

