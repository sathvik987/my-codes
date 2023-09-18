/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
var countNodes = function (root) {
    const dfs = (node, count) => {
        if (!node) {
            return count
        }
        count++
        if (node.left) {
            count = dfs(node.left, count)
        }
        if (node.right) {
            count = dfs(node.right, count)
        }
        return count
    }

    return dfs(root, 0)

    //Check ztm to optimize
};
// @lc code=end

