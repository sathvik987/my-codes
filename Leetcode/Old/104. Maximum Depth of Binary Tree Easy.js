/* Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node
down to the farthest leaf node.

Example 1:
Input: root = [3, 9, 20, null, null, 15, 7]
Output: 3

Example 2:

Input: root = [1, null, 2]
Output: 2

Example 3:

Input: root = []
Output: 0

Example 4:

Input: root = [0]
Output: 1

Constraints:

The number of nodes in the tree is in the range[0, 10 ^ 4].
    - 100 <= Node.val <= 100

 */
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
// T - O(n)
// S - O(n) - (unbalanced tree) , best - O(log n)

/*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
 */

// ------- Code to generate our binary tree -------
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(values) {
        const queue = [this];
        let i = 0;
        while (queue.length > 0) {
            let current = queue.shift();
            for (let side of ["left", "right"]) {
                if (!current[side]) {
                    if (values[i] !== null) {
                        current[side] = new TreeNode(values[i]);
                    }
                    i++;
                    if (i >= values.length) return this;
                }
                if (current[side]) queue.push(current[side]);
            }
        }
        return this;
    }
}

const root = new TreeNode();
root.insert([1, 1, 1, 1, null, null, null, 1, null, null, null, 1, null, null]);

var maxDepth = function (node, currentDepth = 0) {
    if (!node) {
        return currentDepth;
    }

    currentDepth++;

    return Math.max(maxDepth(node.right, currentDepth), maxDepth(node.left, currentDepth));

};
console.log(maxDepth(root, 0));