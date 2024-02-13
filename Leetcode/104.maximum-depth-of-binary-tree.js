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

var maxDepth = function (node, currentDepth = 0) {
    if (!node) {
        return currentDepth;
    }

    currentDepth++;

    return Math.max(maxDepth(node.right, currentDepth), maxDepth(node.left, currentDepth));
};
// @lc code=end

