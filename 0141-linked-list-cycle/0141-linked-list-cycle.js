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
    if (!head || !head.next) return false

    const map = new Map()
    let curr = head;
    while (curr) {
        if (!map.get(curr))
            map.set(curr, 1);
        else
            return true;

        curr = curr.next;
    }
    return false
};