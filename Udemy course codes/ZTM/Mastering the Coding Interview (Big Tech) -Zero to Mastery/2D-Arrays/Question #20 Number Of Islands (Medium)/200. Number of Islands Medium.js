/* Given an m x n 2d grid map of '1's(land) and '0's(water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
You may assume all four edges of the grid are all surrounded by water.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1

Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3

Constraints:

    m == grid.length
    n == grid[i].length
    1 <= m, n <= 300
    grid[i][j] is '0' or '1'.

  */


let inputGrid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

let inputGrid2 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "1"],
    ["0", "0", "0", "1", "1"]
]

// T - O(n)
// S - O(n). bfs sol has O(min(m,n))
const dfs = function (grid, i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] != '1') return;

    grid[i][j] = '0'
    dfs(grid, i - 1, j)
    dfs(grid, i, j + 1)
    dfs(grid, i + 1, j)
    dfs(grid, i, j - 1)
};

var numIslands = function (grid) {
    if (!grid) return 0;

    let count = 0
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1') {
                dfs(grid, i, j)
                count++
            }

        }
    }
    return count
};
console.log(numIslands(inputGrid))
console.log(numIslands(inputGrid2))



// my sol : Time Limit Exceeded
var bfs = function (grid, row, col) {
    let queue = [[row, col]]

    while (queue.length) {
        let current = queue.shift()
        let row = current[0]
        let col = current[1]
        grid[row][col] = '0'

        if (row - 1 >= 0) {
            if (grid[row - 1][col] === '1') {
                queue.push([row - 1, col])
            }
        }
        if (col + 1 < grid[0].length) {
            if (grid[row][col + 1] === '1') {
                queue.push([row, col + 1])
            }

        }

        if (row + 1 < grid.length) {
            if (grid[row + 1][col] === '1') {
                queue.push([row + 1, col])
            }

        }
        if (col - 1 >= 0) {

            if (grid[row][col - 1] === '1') {
                queue.push([row, col - 1])
            }

        }

    }


}

var numIslands2 = function (grid) {

    let count = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            debugger
            if (grid[i][j] === '1') {
                count++
                bfs(grid, i, j)
            }

        }
    }

    return count;


};
