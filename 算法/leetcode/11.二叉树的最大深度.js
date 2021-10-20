/*
 * function TreeNode(x) {
 *   this.val = x;
 *   this.left = null;
 *   this.right = null;
 * }
 */

/**
  * 
  * @param root TreeNode类 
  * @return int整型
  */
 function maxDepth( root ) {
    if(root==null)  return 0;
    let queue = [root]; //从根节点开始
    let res=0; //深度
    while(queue.length){ //下一层是否有节点，没有则上一次为叶子节点
        let temp = [];  //保存下一层遍历结果
        for(let i=0;i<queue.length;i++){
            if(queue[i].left){
                temp.push(queue[i].left); //有左节点，左节点进栈
            }
            if(queue[i].right){
                temp.push(queue[i].right);//有右节点，右节点进栈
            }
        }
        res+=1; //层数加一
        queue=temp;
    }
    return res;
}
module.exports = {
    maxDepth : maxDepth
};