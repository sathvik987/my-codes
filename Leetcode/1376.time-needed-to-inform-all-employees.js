/*
 * @lc app=leetcode id=1376 lang=javascript
 *
 * [1376] Time Needed to Inform All Employees
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */

//Check ztm sol
var numOfMinutes = function (n, headID, manager, informTime) {
    const dfs = (vertex, adjacencylist, seen, informTime, mins, max) => {
        mins = informTime[vertex] + mins
        max = Math.max(max, mins)
        seen.add(vertex)
        for (let v of adjacencylist[vertex]) {
            if (!seen.has(v)) {
                max = dfs(v, adjacencylist, seen, informTime, mins, max)
            }
        }

        return max
    }

    let adjacencylist = new Array(n).fill().map(() => [])
    for (let i = 0; i < manager.length; i++) {
        let cur = manager[i]
        if (cur !== -1) {
            adjacencylist[manager[i]].push(i)
        }
    }

    return dfs(headID, adjacencylist, new Set(), informTime, 0, 0)
};
// @lc code=end
