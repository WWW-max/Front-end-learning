63/**
* @param {number[][]} obstacleGrid
* @return {number}
*/
var uniquePathsWithObstacles = function(obstacleGrid) {
     let n = obstacleGrid.length;
     let m = obstacleGrid[0].length;

     let dp = new Array(m);
     dp.fill(0);


     dp[0]=obstacleGrid[0][0]==0?1:0;
     for(let i=0;i<n;i++){
         for(let j=0;j<m;j++){
             if(obstacleGrid[i][j]==1){
                 dp[j]=0;
                 continue;
             }
             if(j>=1&&obstacleGrid[i][j-1]==0){
                 dp[j]+=dp[j-1]; //前一个+上一个
             }
         }
     }
     return dp[m-1];

};