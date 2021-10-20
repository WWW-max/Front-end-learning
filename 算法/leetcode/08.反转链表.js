/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    let pre =null; //前一个节点
    let pcur=head; //后一个节点
    while(pcur){ //当节点不为空
        let p = pcur.next; //后一个节点扭转后下一个节点就找不到了，所以先记录保存当前节点的下一个节点
        pcur.next=pre; //反转
        pre = pcur; //移动 （前一个指针移动到当前）
        pcur=p; //移动   （当前指针移动到后一个）
    }
    return pre; //当前节点指针pcur遍历到null才跳转到这里所以要用pre(pcur的前一个)
};