/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    //  动态规划
    let pre = 0;//第i个位置结尾的连续子数组和的前一段
    let max = nums[0];//最大连续子数组和

    nums.forEach(x =>{
        pre = Math.max(pre+x,x);//加上当前第i个位置的x和不加哪个大
        max = Math.max(pre,max);//找出第i个位置结尾的连续子数组组成的集合中最大的
    })

    return max;
};