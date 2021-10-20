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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if(root==null) return [];
    let res=[[root.val]]; //返回结果
    let queue = [root]; //队列
    while(queue.length){
        let temp = []; //记录每层节点
        let temp2 = [];//记录每层节点的值
        for(let i=0;i<queue.length;i++){ //遍历队列中的每个节点
            if(queue[i].left){
                 temp.push(queue[i].left); //节点有左节点
                 temp2.push(queue[i].left.val); //节点的左节点的值
            }
            if(queue[i].right){
                temp.push(queue[i].right); //节点有右节点
                temp2.push(queue[i].right.val); //节点的右节点的值
            } 
        }
        if(temp2.length!=0){
            res.push(temp2);
        }
        
        queue=temp;
    }
    return res;
};