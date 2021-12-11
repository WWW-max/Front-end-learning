/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 * 
 * @param head ListNode类 
 * @return bool布尔型
 */
 function hasCycle( head ) {
    if(head===null) return null;
    let slow=head;//慢指针指向头结点
    let fast=head;//快指针指向头结点
    while(fast&&fast.next){ //保证fast.next!==null才能写fast.next.next
        slow=slow.next;
        fast=fast.next.next;
         if(fast===slow){
            return true;
        }
    }
    return false;
}
module.exports = {
    hasCycle : hasCycle
};