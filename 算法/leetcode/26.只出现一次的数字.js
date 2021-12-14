/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 异或，相同为1,不相同为0,特殊规律：任何数和0异或后等于本身，任何数和自身异或等于0，
 * 异或满足结合律和分配律，a^b^a=(a^a)^b=b,所以可以直接用数组第一位和剩余位异或
 * */ 
 var singleNumber = function(nums) {
    let res = nums[0];
    for(let i=1;i<nums.length;i++){
        res ^=nums[i];
    }
    return res;
};