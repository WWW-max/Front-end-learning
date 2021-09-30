/**
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    let r =grid.length;
    let h = grid[0].length;
    if(r==0||h==0){
        return 0;
    }
    let dp = new Array();
    for(let i=0;i<r;i++){
        dp[i] = new Array();
    }
  //   第一列
    for(let i=0;i<r;i++){
        dp[i][0] = grid[i][0]+dp[i-1][0];
    }
  //   第一行
    for(let j=0;j<h;j++){
        dp[0][j]=grid[0][j]+dp[0][j-1];
    }
    for(let i=1;i<r;i++){
        for(let j=1;j<h;j++){
            dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1])+grid[i][j];
        }
    }
    return dp[r-1][h-1];
};