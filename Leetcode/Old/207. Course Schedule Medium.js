/* There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?



Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.

Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.



Constraints:

    The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
    You may assume that there are no duplicate edges in the input prerequisites.
    1 <= numCourses <= 10^5

 */

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

let input = [[1, 0], [2, 1], [2, 5], [0, 3], [4, 3], [3, 5], [4, 5]]
let input2 = [[1, 0], [0, 1]]

// T - O(P + n^2)  p= no of  prerequisites pair or n+E - n arrays in adList and total no of edges
// S - O(n^2)- because of adList
//Using Topological sort
var canFinish = function (numCourses, prerequisites) {
    const inDegree = new Array(numCourses).fill(0);
    const adjList = inDegree.map(() => []);

    for (let i = 0; i < prerequisites.length; i++) {
        const pair = prerequisites[i];
        inDegree[pair[0]]++;
        adjList[pair[1]].push(pair[0])
    }

    const stack = [];

    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            stack.push(i);
        }
    }

    let count = 0;

    while (stack.length) {
        const current = stack.pop();
        count++;

        const adjacent = adjList[current];

        for (let i = 0; i < adjacent.length; i++) {
            const next = adjacent[i];
            inDegree[next]--;
            if (inDegree[next] === 0) {
                stack.push(next);
            }
        }
    }

    return count === numCourses
};
console.log(canFinish(6, input))
console.log(canFinish(2, input2))

// T - O(P + n^3) p= len of  prerequisites pair
// S - O(n^2)
var canFinish2 = function (numCourses, prerequisites) {
    const adjList = new Array(numCourses).fill(0).map(() => []);

    for (let i = 0; i < prerequisites.length; i++) {
        const pair = prerequisites[i];
        adjList[pair[1]].push(pair[0])
    }

    for (let v = 0; v < numCourses; v++) {
        const queue = [];
        const seen = {};
        for (let i = 0; i < adjList[v].length; i++) {
            queue.push(adjList[v][i]);
        }

        while (queue.length) {
            const current = queue.shift();
            seen[current] = true;

            if (current === v) return false;
            const adjacent = adjList[current];
            for (let i = 0; i < adjacent.length; i++) {
                const next = adjacent[i];
                if (!seen[next]) {
                    queue.push(next);
                }
            }
        }
    }

    return true;
};
console.log(canFinish2(6, input))
console.log(canFinish2(2, input2))
