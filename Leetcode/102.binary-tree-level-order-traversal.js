/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    let levels = [];
    let queue = [root];

    if (!root) {
        return levels
    }

    //queue.push([root]);
    //Commented sols are mine
    while (queue.length) {
        /*         let currValues = [];
                let nextLevel = [];
                let currentLevel = queue.shift();
                while (currentLevel.length) {
                    let node = currentLevel.shift();
                    currValues.push(node.val);
                    if (node.left) {
                        nextLevel.push(node.left)
                    }
                    if (node.right) {
                        nextLevel.push(node.right)
                    }
                }
                levels.push(currValues)
                if (nextLevel.length) {
                    queue.push(nextLevel)
                } */

        let currentLevelValues = [];
        let length = queue.length;
        let count = 0;
        while (count < length) {
            let node = queue.shift();
            currentLevelValues.push(node.val)

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }

            count++

        }

        levels.push(currentLevelValues)
    }

    return levels
};

// @lc code=end

