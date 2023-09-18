/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    /*     let seen = new Set();
        let currentNode = head;
    
        while (currentNode) {
            if (seen.has(currentNode)) {
                return currentNode
            } else {
                seen.add(currentNode)
            }
            currentNode = currentNode.next;
        }
    
        return null */

    let hare = head;
    let tortoise = head;

    while (true) {
        if (!hare || !hare.next) {
            return null
        }
        hare = hare.next
        if (!hare || !hare.next) {
            return null
        }
        hare = hare.next
        tortoise = tortoise.next

        if (tortoise === hare) {
            break
        }

    }

    let p1 = head;
    let p2 = hare;

    while (p1 !== p2) {
        p1 = p1.next
        p2 = p2.next
    }

    return p1
};
// @lc code=end

