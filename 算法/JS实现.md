反转链表

```js
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
var reverseList = function(head) {
    var pre=null;
    var p = head;
    while(p){
        var pnext = p.next;
        p.next=pre;
        pre=p;
        p=pnext;
    }
    return pre;  
};
```



