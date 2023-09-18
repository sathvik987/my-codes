/*
 * @lc app=leetcode id=94 lang=javascript
 *
 * [94] Binary Tree Inorder Traversal
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
 * @return {number[]}
 */
const dfs = (node, nodeValues) => {
    if (node.left) {
        dfs(node.left, nodeValues)
    }
    nodeValues.push(node.val)
    if (node.right) {
        dfs(node.right, nodeValues)
    }
}

var inorderTraversal = function (root) {
    let values = []
    if (!root) {
        return values
    }
    dfs(root, values)
    return values
};
// @lc code=end

