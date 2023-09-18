//Topological sort works only for DAG. No cycles.
let input = [[1],
[2],
[],
[0, 4],
[],
[2, 3, 4]]
//T -  O(V+E) – where V is the number of vertices and E is the number of edges in the graph.
//S - O(V) 
const topologicalSort = function (adjacencyList) {

    const values = []
    const inDegree = new Array(adjacencyList.length).fill(0);

    for (let i = 0; i < adjacencyList.length; i++) {
        let adjacentLine = adjacencyList[i]
        for (let j = 0; j < adjacentLine.length; j++) {
            inDegree[adjacencyList[i][j]]++
        }
    }

    const stack = [];

    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            stack.push(i);
        }
    }

    while (stack.length) {
        const current = stack.pop();
        values.push(current)

        const adjacent = adjacencyList[current];

        for (let i = 0; i < adjacent.length; i++) {
            const next = adjacent[i];
            inDegree[next]--;
            if (inDegree[next] === 0) {
                stack.push(next);
            }
        }
    }

    return values
};

console.log(topologicalSort(input))