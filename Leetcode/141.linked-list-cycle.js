/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
 * @return {boolean}
 */
var hasCycle = function (head) {
    /*     let seen = new Set();
        let current = head;
        while (current) {
            if (seen.has(current)) {
                return true
            }
            seen.add(current)
            current = current.next
        }
        return false */

    let hare = head;
    let tortoise = head;
    while (hare && hare.next) {
        hare = hare.next.next
        tortoise = tortoise.next

        if (hare === tortoise) {
            return true
        }
    }
    return false

};
// @lc code=end

