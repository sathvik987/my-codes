/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var maxDepth = function (root) {
    const dfs = (node, total, level, seen) => {
        if (node) {
            if (!seen.has(level)) {
                seen.add(level)
                total++
            }
            if (node.left) {
                total = dfs(node.left, total, level + 1, seen)
            }
            if (node.right) {
                total = dfs(node.right, total, level + 1, seen)
            }
        }
        return total
    }

    return dfs(root, 0, 0, new Set())
};
// @lc code=end

