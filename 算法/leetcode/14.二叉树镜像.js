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
    if(root){//只要还是节点
        /**
         * 交换左右节点
         */
        let item = root.left;
        root.left=root.right;
        root.right=item; 
        /**递归调用，传入左右节点 */
        mirrorTree(root.left);
        mirrorTree(root.right);
    }
    return root;
};