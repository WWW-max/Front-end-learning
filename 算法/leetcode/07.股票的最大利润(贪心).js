/**
  * 
  * @param prices int整型一维数组 
  * @return int整型
  */
 function maxProfit( prices ) {
    // write code here
    let len = prices.length;
    let profit =0;
    let minval=prices[0];
    for(let i=1;i<len;i++){
        if(prices[i]<minval){
            minval=prices[i];
        }
        profit=Math.max(profit,prices[i]-minval);
    }
    return profit;
}
module.exports = {
    maxProfit : maxProfit
};

