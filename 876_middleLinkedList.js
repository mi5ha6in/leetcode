/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
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
list1.next.next.next = new ListNode(4);
list1.next.next.next.next = new ListNode(5);
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let count = 0;
  copyHead = head;

  while (copyHead) {
    copyHead = copyHead.next;
    count++;
  }

  let index = Math.trunc(count / 2);
  let i = 0;

  while (i < index) {
    head = head.next;
    i++;
  }

  return head;
};

console.log(middleNode(list1)); // 3
