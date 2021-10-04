/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    if(m<=0||n<=0){
        return 0;
    }
     let dp = new Array();
    for(let j=0;j<n;j++){
       //  第一行
        dp[j]=1;
    }
   //  从第二行开始遍历每行
   for(let i=1;i<m;i++){
       // 第i行第0列
       dp[0]=1;
       for(let j=1;j<n;j++)
       dp[j]=dp[j-1]+dp[j];
   }
   return dp[n-1];

};