/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let head = null;
    let current = null;
    let p1 = list1
    let p2 = list2
    if (p1 && p2) {
        while (p1 && p2) {
            if (p1.val <= p2.val) {
                if (!head) {
                    head = p1
                } else {
                    current.next = p1
                }
                current = p1
                p1 = p1.next
            } else {
                if (!head) {
                    head = p2
                } else {
                    current.next = p2
                }
                current = p2
                p2 = p2.next
            }
        }
        if (p1) {
            current.next = p1
        }
        if (p2) {
            current.next = p2
        }
    } else {
        return p1 || p2
    }
    return head
};
// @lc code=end