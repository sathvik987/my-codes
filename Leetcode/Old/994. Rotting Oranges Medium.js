/* In a given grid, each cell can have one of three values:

    the value 0 representing an empty cell;
    the value 1 representing a fresh orange;
    the value 2 representing a rotten orange.

Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead.
Example 1:

Input: [[2,1,1],[1,1,0],[0,1,1]]
Output: 4

Example 2:

Input: [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation:  The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.

Example 3:

Input: [[0,2]]
Output: 0
Explanation:  Since there are already no fresh oranges at minute 0, the answer is just 0.

Note:

    1 <= grid.length <= 10
    1 <= grid[0].length <= 10
    grid[i][j] is only 0, 1, or 2.

 */

/**
 * @param {number[][]} grid
 * @return {number}
 */


// T - O(n)
// S - O(n)
const testMatrix = [
    [2, 1, 1, 0, 0],
    [1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 1, 0, 0, 1]
];

const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
]

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;


const orangesRotting = function (matrix) {


    const queue = [];
    let freshOranges = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            if (matrix[row][col] === ROTTEN) {
                queue.push([row, col])
            }

            if (matrix[row][col] === FRESH) {
                freshOranges++;
            }
        }
    }

    let minutes = 0;
    let currentQueueSize = queue.length;

    while (queue.length > 0) {
        if (currentQueueSize === 0) {
            currentQueueSize = queue.length;
            minutes++;
        }

        const currentOrange = queue.shift();
        currentQueueSize--;
        const row = currentOrange[0];
        const col = currentOrange[1];

        for (let i = 0; i < directions.length; i++) {
            const currentDir = directions[i];
            const nextRow = row + currentDir[0];
            const nextCol = col + currentDir[1];

            if (nextRow < 0 || nextRow >= matrix.length || nextCol < 0 || nextCol >= matrix[0].length) {
                continue;
            }

            if (matrix[nextRow][nextCol] === FRESH) {
                matrix[nextRow][nextCol] = 2;
                freshOranges--;
                queue.push([nextRow, nextCol]);
            }
        }
    }

    if (freshOranges !== 0) {
        return -1;
    }

    return minutes;
};

console.log(orangesRotting(testMatrix))