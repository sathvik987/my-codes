/* You are given a m x n 2D grid initialized with these three possible values.

-1 - A wall or an obstacle.
0 - A gate.
Infinity - Infinityinity means an empty room. We use the value 2^31 - 1 = 2147483647 to represent Infinity as
you may assume that the distance to a gate is less than 2147483647.

Fill each empty room with the distance to its nearest gate. If it is impossible to reach a gate, it should be filled with Infinity.
For example, given the 2D grid:

Infinity      -1           0        Infinity
Infinity    Infinity   Infinity       -1
Infinity     -1        Infinity       -1
0            -1        Infinity      Infinity

After running your function, the 2D grid should be:

3  -1   0   1
2   2   1  -1
1  -1   2  -1
0  -1   3   4 */

// T - O(n)
//S - O(n)

const INF = Infinity;

const testMatrix = [
    [INF, -1, 0, INF],
    [INF, INF, INF, -1],
    [INF, -1, INF, -1],
    [0, -1, INF, INF]
];

const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;
const directions = [
    [-1, 0], //up
    [0, 1], //right
    [1, 0], //down
    [0, -1] //left
]

const dfs = (grid, row, col, count) => {
    if (row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || count > grid[row][col]) return
    grid[row][col] = count
    for (let i = 0; i < directions.length; i++) {
        const currentDir = directions[i];
        dfs(grid, row + currentDir[0], col + currentDir[1], count + 1);
    }
}


const wallsAndGates = (rooms) => {
    for (let row = 0; row < rooms.length; row++) {
        for (let col = 0; col < rooms[0].length; col++) {
            if (rooms[row][col] === GATE) {
                dfs(rooms, row, col, 0)
            }
        }
    }
};

wallsAndGates(testMatrix)
console.log(testMatrix);