/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
class TreeNode {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
var sortedArrayToBST = function (nums) {
    const constructBST = (nums, left, right) => {
        if (left > right) {
            return null
        }
        let mid = Math.floor((left + right) / 2);
        let node = new TreeNode(nums[mid]);
        node.left = constructBST(nums, left, mid - 1)
        node.right = constructBST(nums, mid + 1, right)
        return node
    }
    return constructBST(nums, 0, nums.length - 1)
};