/**
 * https://leetcode.com/problems/reverse-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let prevPointer = null;
  let currentPointer = head;

  while (currentPointer) {
    tempNext = currentPointer.next;
    currentPointer.next = prevPointer;
    prevPointer = currentPointer;
    currentPointer = tempNext;
  }
  return prevPointer;
}

console.log(reverseList(list1));
// ListNode {
//   val: 3,
//   next: ListNode { val: 2, next: ListNode { val: 1, next: null } }
// }

function reverseListRecursive(head) {
  if (!head) {
    return null;
  }

  let newHead = head;

  if (head.next) {
    newHead = reverseListRecursive(head.next);
    head.next.next = head;
  }
  head.next = null;

  return newHead;
}

console.log(reverseListRecursive(list1));
// ListNode {
//   val: 3,
//   next: ListNode { val: 2, next: ListNode { val: 1, next: null } }
// }
