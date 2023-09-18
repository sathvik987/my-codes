let adjList = [[[2, 4], [4, 6]],
[[0, 2], [2, 9]],
[[4, 1]],
[[2, 3], [1, 5]],
[[3, 7]],]

let adjList2 = [[[2, 4], [4, 6]],
[[0, 2], [2, 9]],
[[4, -3]],
[[2, -4], [1, 5]],
[[3, 7]],]
// This is dp
// T - O(v*e)
// S - O(v)
function bellmanFordAlg(graph, s) {
    let n = graph.length;
    const distances = new Array(n).fill(Infinity);
    distances[s] = 0;
    for (let t = 0; t < n - 1; t++) {
        let count = 0;
        for (let i = 0; i < graph.length; i++) {
            let adjacent = graph[i]
            for (let j = 0; j < adjacent.length; j++) {
                const source = i;
                const target = graph[i][j][0];
                const weight = graph[i][j][1];

                if (distances[source] + weight < distances[target]) {
                    distances[target] = distances[source] + weight;
                    count++;
                }
            }
        }
        if (count === 0) break;
    }

    return distances

}

console.log(bellmanFordAlg(adjList, 1))
console.log(bellmanFordAlg(adjList2, 1))

