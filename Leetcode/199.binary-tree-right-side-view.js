/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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


var rightSideView = function (root) {
    const dfs = (node, seenLevels, level, rightSideViewArray) => {
        if (!node) {
            return rightSideViewArray
        }

        if (!seenLevels.has(level)) {
            rightSideViewArray.push(node.val);
            seenLevels.add(level);
        }

        level++

        if (node.right) {
            dfs(node.right, seenLevels, level, rightSideViewArray)
        }

        if (node.left) {
            dfs(node.left, seenLevels, level, rightSideViewArray)
        }

        return rightSideViewArray

    }

    return dfs(root, new Set(), 0, [])
};
// @lc code=end

