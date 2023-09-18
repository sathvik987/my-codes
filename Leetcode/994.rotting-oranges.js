/*
 * @lc app=leetcode id=994 lang=javascript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 * 
 */
var orangesRotting = function (grid) {
    let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]
    let freshOranges = 0
    let queue = []
    let minutes = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            let val = grid[row][col]
            if (val === 1) {
                freshOranges++
            } else if (val === 2) {
                queue.push([row, col])
            }
        }
    }

    let currentSize = queue.length

    while (queue.length) {
        if (currentSize === 0) {
            minutes++
            currentSize = queue.length
        }
        let pos = queue.shift()
        currentSize--
        let row = pos[0]
        let col = pos[1]
        for (let direction of directions) {
            let nextRow = row + direction[0]
            let nextCol = col + direction[1]
            if (nextRow < 0 || nextCol < 0 || nextRow === grid.length || nextCol === grid[0].length) {
                continue
            }
            let val = grid[nextRow][nextCol]
            if (val === 1) {
                grid[nextRow][nextCol] = 2
                freshOranges--
                queue.push([nextRow, nextCol])
            }
        }
    }

    if (!freshOranges) {
        return minutes
    } else {
        return -1
    }

};


// @lc code=end

