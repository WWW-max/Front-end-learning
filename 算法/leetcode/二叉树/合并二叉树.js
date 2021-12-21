/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// 深度优先遍历
 var mergeTrees = function(root1, root2) {

    if(root1===null) return root2;//第一棵树为空，返回第二棵
    if(root2===null) return root1;//第二课树为空，返回第一课

    let mergeNode = new TreeNode(root1.val+root2.val);//合并后的节点
    mergeNode.left = mergeTrees(root1.left,root2.left);//递归左子树
    mergeNode.right = mergeTrees(root1.right,root2.right);//递归右子树
    return mergeNode;
};