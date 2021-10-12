var levelOrder =function(root){
    if(!root) return [];
    const queue =[root];
    const res =[];//存放遍历结果
    let level =0;//代表当前层数
    while(queue.length){
        res[level] = [];//第level 层的遍历结果

        let levelNum =queue.length;
        while(levelNum--){
            const front =queue.shift();
            res[level].push(front.val);
            if(front.left) queue.push.push(front.left);
            if(front.right) queue.push(front.right);
        }
        level++;
    }
    return res;

};