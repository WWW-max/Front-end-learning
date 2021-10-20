/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    /**
     * ES6 Map集合包含方法
     * set(key,value)
     * get(key)
     * has(key)
     * delete()
     * clear()
     * 
     * 两数之和想象成找两兄弟
     * 遍历每个人，如果你的兄弟在我这里，那就是你俩了
     * 如果不在，先把你抓起来
     */

    let map = new Map(); 
    let res =[];
    nums.forEach((item,index) => {
        if(map.has(target-item)){//如果你的兄弟已经被抓进来了
           res.push(map.get(target-item),index);//就是你俩
        }else{
           map.set(item,index);//否则先把你抓起来，再找你兄弟
        }
    })
    return res;
};