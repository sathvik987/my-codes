const testMatrix = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
];


// T - O(n)
// S - O(n)
const traversalDFS = function (matrix) {
    const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));

    const values = [];

    dfs(matrix, 0, 0, seen, values);

    return values;
}

const dfs = function (matrix, row, col, seen, values) {
    if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) return;

    seen[row][col] = true;
    values.push(matrix[row][col]);

    dfs(matrix, row - 1, col, seen, values);
    dfs(matrix, row, col + 1, seen, values);
    dfs(matrix, row + 1, col, seen, values);
    dfs(matrix, row, col - 1, seen, values);

}

console.log(traversalDFS(testMatrix)); 