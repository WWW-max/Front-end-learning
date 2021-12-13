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
 var detectCycle = function(head) {
    let set = new Set();
   while(head){
       if(set.has(head)){ //set中已经存在，则为入口节点，返回即可。
           return head;
       }
       set.add(head);
       head=head.next;
   }
   return null;
};