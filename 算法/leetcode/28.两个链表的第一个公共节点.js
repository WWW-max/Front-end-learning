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
 var getIntersectionNode = function(headA, headB) {
    let s = new Set();
    while(headA){
        s.add(headA);
        headA=headA.next;
    }
    while(headB){
        if(s.has(headB)){
            return headB;
        }
        headB=headB.next;
    }
};