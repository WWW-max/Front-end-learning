/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let sum = []; //相加后的结果，数组每个元素作为一位
    let carry =0; //进位值
    while(l1&&l2){ //遍历到更小的数(更短的链表)末尾时结束循环
       sum.push((l1.val+l2.val+carry)%10);//对10取余，求每位的值
       carry=Math.floor((l1.val+l2.val+carry)/10);//除10向下取整，求进位值
       l1=l1.next;
       l2=l2.next;
    }
    let ls = l1===null ? l2:l1; //更长链表剩余的值
    while(ls){ //遍历剩余的值
        sum.push((ls.val+carry)%10);
        carry=Math.floor((ls.val+carry)/10);
        ls=ls.next;
    }
    let res =new ListNode(-1); //亚节点
    let pre =res; //亚节点
    while(sum.length){
        let node = new ListNode(sum.shift());
        pre.next = node;
        pre = node;
    }
    if(carry===1){ //连续进位到最后一位还要进一位时，9999+99 =89001
        let node = new ListNode(1);
        pre.next=node;
    }
    return res.next;
};