/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
    if(root==null) return 0;
    let queue = [root];
    let res =0;
    while(queue.length){
        res+=1;
        let temp = [];
        for(let i =0;i<queue.length;i++){
            if(queue[i].left==null&&queue[i].right==null) return res; //广度优先遍历过程中，如果某个节点没有左右子树则此时深度最小
            if(queue[i].left) temp.push(queue[i].left);
            if(queue[i].right) temp.push(queue[i].right);
        }
        queue=temp;
    }
};