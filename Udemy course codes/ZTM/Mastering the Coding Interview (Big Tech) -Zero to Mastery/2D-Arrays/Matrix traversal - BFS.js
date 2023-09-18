const testMatrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];
// T - O(n)
// S - O(n)
const traversalBFS = function (matrix) {
    const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

    const values = [];

    const queue = [[0, 0]];

    while (queue.length) {
        const currentPos = queue.shift();
        const row = currentPos[0];
        const col = currentPos[1];

        if (row < 0 || row >= matrix.length || col < 0 || col >= matrix[0].length || seen[row][col]) {
            continue;
        }

        seen[row][col] = true;
        values.push(matrix[row][col]);

        queue.push([row - 1, col]);
        queue.push([row, col + 1]);
        queue.push([row + 1, col]);
        queue.push([row, col - 1]);

    }

    return values;
}



console.log(traversalBFS(testMatrix));