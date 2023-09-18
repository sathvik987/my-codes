/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    let adjacencyList = new Array(numCourses).fill().map(() => []);
    let inDegree = new Array(numCourses).fill(0);
    for (let v of prerequisites) {
        adjacencyList[v[1]].push(v[0])
        inDegree[v[0]]++
    }
    let count = 0;
    let stack = [];
    for (let i = 0; i < inDegree.length; i++) {
        if (inDegree[i] === 0) {
            stack.push(i)
        }
    }

    while (stack.length) {
        let curr = stack.pop()
        count++

        let adjacenctVertexs = adjacencyList[curr]
        for (let v of adjacenctVertexs) {
            inDegree[v]--
            if (inDegree[v] === 0) {
                stack.push(v)
            }
        }
    }

    return count === numCourses
};

// @lc code=end

