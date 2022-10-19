/**
 * https://leetcode.com/problems/linked-list-cycle/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = list1.next;
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let fastPointer = head;
  let slowPointer = head;

  while (fastPointer && fastPointer.next) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
    if (fastPointer === slowPointer) {
      return true;
    }
  }

  return false;
};

console.log(hasCycle(list1)); // true
