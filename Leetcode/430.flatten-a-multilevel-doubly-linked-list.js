/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
    let currentNode = head;

    while (currentNode) {
        if (currentNode.child) {
            let nextNode = currentNode.next
            let childNode = currentNode.child
            let currentChildNode = currentNode.child
            let lastChildNode = currentNode.child
            while (currentChildNode) {
                lastChildNode = currentChildNode
                currentChildNode = currentChildNode.next
            }
            currentNode.child = null;
            currentNode.next = childNode;
            childNode.prev = currentNode
            lastChildNode.next = nextNode
            if (nextNode && nextNode.prev) {
                nextNode.prev = lastChildNode
            }
        } else {
            currentNode = currentNode.next
        }
    }


    return head;
};
// @lc code=end

