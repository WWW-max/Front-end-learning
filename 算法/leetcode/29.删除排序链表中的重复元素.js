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
 var deleteDuplicates = function(head) {
    var cur = head;
    while(cur && cur.next) {
        if(cur.val == cur.next.val) { //当前节点值和当前节点后一节点值相同
            cur.next = cur.next.next; 
        } else {
            cur = cur.next;
        }
    }
    return head;
};
