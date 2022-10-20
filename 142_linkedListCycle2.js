/**
 * https://leetcode.com/problems/linked-list-cycle-ii/
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
  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;

    if (fastPointer === slowPointer) {
      let pointer = head;
      while (pointer !== slowPointer) {
        pointer = pointer.next;
        slowPointer = slowPointer.next;
      }
      return pointer;
    }
  }
  return null;
};
