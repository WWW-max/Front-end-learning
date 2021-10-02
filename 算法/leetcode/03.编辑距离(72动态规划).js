/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    var w1= word1.length;
    var w2= word2.length;

    var dp = new Array();
    for(let i=0;i<=w1;i++){
        dp[i]= new Array();
    }
    dp[0][0]=0;
    // 其中一个单词长度为0时
    // 第一列
    for(let i=1;i<=w1;i++){
       dp[i][0]=dp[i-1][0]+1;
    }
    // 第一行
    for(let j=1;j<=w2;j++){
        dp[0][j]=dp[0][j-1]+1;
    }
    for(let i=1;i<=w1;i++){
        for(let j=1;j<=w2;j++){
            if(word1[i-1]===word2[j-1]){
                dp[i][j]=dp[i-1][j-1];
            }else{
                dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])+1;
            }
        }
    }
    return dp[w1][w2];
};