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

二叉树的镜像

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function(root) {
      let Node = root;
    if(Node===null) return null;
    if(Node.left===null&&Node.right===null){
        return Node;
    }
    let temp =Node.left;
    Node.left=Node.right;
    Node.right=temp;
    if(Node.left!==null){
        mirrorTree(Node.left);
    }
    if(Node.right!==null){
        mirrorTree(Node.right);
    }
    return Node;
};
```



