/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function (root) {
    /*     const validate = (node, min, max) => {
            if (node === null) {
                return true
            }
    
            let val = node.val
    
            if (val <= min || val >= max) {
                return false
            }
    
            return validate(node.left, min, val) && validate(node.right, val, max)
    
        }
    
        return validate(root, -Infinity, Infinity) */


    const dfs = (node, min, max) => {
        let val = node.val
        if (val <= min || val >= max) {
            return false
        }

        if (node.left) {
            if (!dfs(node.left, min, val)) {
                return false
            }
        }

        if (node.right) {
            if (!dfs(node.right, val, max)) {
                return false
            }
        }

        return true
    }


    return dfs(root, -Infinity, Infinity)
};
// @lc code=end

