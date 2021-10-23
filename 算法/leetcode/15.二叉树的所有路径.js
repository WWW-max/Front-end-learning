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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    let res = []; //返回结果
    if (!root) { //根节点为空，直接返回空数组
        return res
    }

    if (!root.left && !root.right) { //只有一个空节点，返回该空节点字符串数组
        return [`${root.val}`]
    }

    let leftPaths = binaryTreePaths(root.left) 
    let rightPaths = binaryTreePaths(root.right)

    leftPaths.forEach((leftPath) => {
        res.push(`${root.val}->${leftPath}`) 
    })
    rightPaths.forEach((rightPath) => {
        res.push(`${root.val}->${rightPath}`)
    })

    return res
};