/* On an NxN chessboard, a knight starts at the r-th row and c-th column and attempts to make exactly K moves. The rows and columns are 0 indexed,
so the top-left square is (0, 0), and the bottom-right square is (N-1, N-1).

A chess knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction,
then one square in an orthogonal direction.


Each time the knight is to move, it chooses one of eight possible moves uniformly at random
(even if the piece would go off the chessboard) and moves there.

The knight continues moving until it has made exactly K moves or has moved off the chessboard.
Return the probability that the knight remains on the board after it has stopped moving.

Example:

Input: 3, 2, 0, 0
Output: 0.0625
Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
From each of those positions, there are also two moves that will keep the knight on the board.
The total probability the knight stays on the board is 0.0625.

Note:

   N will be between 1 and 25.
   K will be between 0 and 100.
   The knight always initially starts on the board.

*/

const DIRECTIONS = [
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2]
];
// T - O(8^k)
// S - O(8^k)
var knightProbability3 = function (N, K, r, c) {
    if (r < 0 || c < 0 || r >= N || c >= N) {
        return 0;
    }

    if (K === 0) {
        return 1;
    }

    let res = 0;

    for (let dir of DIRECTIONS) {
        res += knightProbability3(N, K - 1, r + dir[0], c + dir[1]) / 8;
    }

    return res;

};

console.log(knightProbability3(6, 2, 3, 3))

// T - O(n^2*k)
// S - O(n^2*k)
const recurse = (N, K, r, c, dp) => {
    if (r < 0 || c < 0 || r >= N || c >= N) {
        return 0;
    }

    if (K === 0) {
        return 1;
    }

    if (dp[K][r][c] !== undefined) return dp[K][r][c];

    let res = 0;
    for (let dir of DIRECTIONS) {
        res += recurse(N, K - 1, r + dir[0], c + dir[1], dp) / 8;
    }

    dp[K][r][c] = res;

    return dp[K][r][c];
};
var knightProbability2 = function (N, K, r, c) {
    const dp = new Array(K + 1).fill(0).map(() => new Array(N).fill(0).map(() => new Array(N).fill(undefined)));
    console.log("dp", dp);
    return recurse(N, K, r, c, dp);
};
console.log(knightProbability2(6, 2, 3, 3))

// T - O(n^2*k)
// S - O(n^2*k)
// Bottom up
var knightProbability = function (N, K, r, c) {
    const dp = new Array(K + 1).fill(0).map(() => new Array(N).fill(0).map(() => new Array(N).fill(0)));

    dp[0][r][c] = 1;
    for (let step = 1; step <= K; step++) {
        for (let row = 0; row < N; row++) {
            for (let col = 0; col < N; col++) {
                for (let i = 0; i < DIRECTIONS.length; i++) {
                    const dir = DIRECTIONS[i];
                    const prevRow = row + dir[0];
                    const prevCol = col + dir[1];
                    if (prevRow >= 0 && prevRow < N && prevCol >= 0 && prevCol < N) {
                        dp[step][row][col] =
                            dp[step][row][col] + dp[step - 1][prevRow][prevCol] / 8;
                    }
                }
            }
        }
    }

    let res = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            res += dp[K][i][j];
        }
    }

    return res;
};
console.log(knightProbability(6, 2, 3, 3))


// T - O(n^2*k)
// S - O(n^2)
// Bottom up
var knightProbability4 = function (N, K, r, c) {
    let prevDp = new Array(N).fill(0).map(() => new Array(N).fill(0));
    let nextDp = new Array(N).fill(0).map(() => new Array(N).fill(0));

    prevDp[r][c] = 1;
    for (let step = 1; step <= K; step++) {
        for (let row = 0; row < N; row++) {
            for (let col = 0; col < N; col++) {
                for (let i = 0; i < DIRECTIONS.length; i++) {
                    const currentDirection = DIRECTIONS[i];
                    const prevRow = row + currentDirection[0];
                    const prevCol = col + currentDirection[1];
                    if (prevRow >= 0 && prevRow < N && prevCol >= 0 && prevCol < N) {
                        nextDp[row][col] =
                            nextDp[row][col] + prevDp[prevRow][prevCol] / 8;
                    }
                }
            }
        }
        prevDp = nextDp;
        nextDp = new Array(N).fill(0).map(() => new Array(N).fill(0));
    }

    let res = 0;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
            res += prevDp[i][j];
        }
    }

    return res;
};
console.log(knightProbability4(6, 2, 3, 3))


//Using hashMap
const recurse99 = (N, K, r, c, dp) => {
    if (r < 0 || c < 0 || r >= N || c >= N) {
        return 0;
    }

    if (K === 0) {
        return 1;
    }

    if (dp[[K, r, c]]) return dp[[K, r, c]];

    let res = 0;
    for (let dir of DIRECTIONS) {
        res += recurse99(N, K - 1, r + dir[0], c + dir[1], dp) / 8;
    }

    dp[[K, r, c]] = res;

    return dp[[K, r, c]];
};
var knightProbability99 = function (N, K, r, c) {
    const dp = {}
    return recurse99(N, K, r, c, dp);
};
console.log(knightProbability99(6, 2, 3, 3))

knightProbability2(3, 2, 0, 0)