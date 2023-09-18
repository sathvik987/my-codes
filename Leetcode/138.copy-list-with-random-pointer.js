/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
/* class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
} */
var copyRandomList = function (head) {
    if (!head) {
        return null;
    }
    const clones = new Map()

    let current = head
    while (current) {
        clones.set(current, new Node(current.val))
        current = current.next
    }

    current = head
    while (current) {
        clones.get(current).next = clones.get(current.next) || null
        clones.get(current).random = clones.get(current.random) || null
        current = current.next
    }

    return clones.get(head)

};
// @lc code=end

