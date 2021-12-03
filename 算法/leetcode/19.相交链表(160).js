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
    let set = new Set();
    let p = headA;
    //遍历A链表将节点放入set集合
    while(p){
        set.add(p);
        p=p.next;
    }
    p=headB;
    // 遍历B链表将节点放入set集合，如果已经存在说明开始相交
    while(p){
        if(set.has(p)){
            return p;
        }
        p=p.next;
    }
    return null;
};