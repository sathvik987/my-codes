/* Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its level order traversal as:

[
  [3],
  [9,20],
  [15,7]
]
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
 * @return {number[][]}
 */

// T - O(n)
// S - O(n) 
/*
NOTE: The beginning portion builds our test case binary tree. Scroll down to the section titled Our Solution for the code solution!
 */

// ------- Code to generate our binary tree -------
class TreeNode {
    constructor(value) {
        this.val = value;
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

const tree = new TreeNode(3);
tree.insert([6, 1, 9, 2, null, 4, null, 5, null, null, null, null, 8, null, null, null]);
// ------- Code to generate our binary tree -------

// ------- Our Solution -------
const levelOrder = function (root) {
    if (!root) return [];
    const result = [];
    const queue = [root];

    while (queue.length) {
        const currentLevelValues = [];
        let length = queue.length, count = 0;

        while (count < length) {
            const currentNode = queue.shift();

            currentLevelValues.push(currentNode.val);

            if (currentNode.left) {
                queue.push(currentNode.left)
            }

            if (currentNode.right) {
                queue.push(currentNode.right)
            }

            count++;
        }

        result.push(currentLevelValues);
    }

    return result;
};

console.log(levelOrder(tree))