/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    /*     let nodeA = headA;
        let nodeB = headB;
    
        while (nodeA) {
            nodeA.seen = true;
            nodeA = nodeA.next
        }
    
        while (nodeB) {
            if (nodeB.seen) {
                return nodeB
            }
            nodeB = nodeB.next
        }
    
        return null */

    let listALength = 0
    let listBLength = 0
    let nodeA = headA;
    let nodeB = headB;
    while (nodeA) {
        listALength++
        nodeA = nodeA.next
    }
    while (nodeB) {
        listBLength++
        nodeB = nodeB.next
    }


    nodeA = headA;
    nodeB = headB;

    if (listALength > listBLength) {
        let diff = listALength - listBLength
        let count = -1;
        while (nodeA) {
            count++
            if (count === diff) {
                break
            }
            nodeA = nodeA.next
        }

    } else if (listBLength > listALength) {
        let diff = listBLength - listALength
        let count = -1;
        while (nodeB) {
            count++
            if (count === diff) {
                break
            }
            nodeB = nodeB.next
        }
    }

    while (nodeA && nodeB) {
        if (nodeA == nodeB) {
            return nodeA
        }
        nodeA = nodeA.next
        nodeB = nodeB.next
    }


    return null
};
// @lc code=end

