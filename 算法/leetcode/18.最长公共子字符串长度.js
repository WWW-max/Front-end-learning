var a ='abcggdefg';
var b ='abcadefgh';
function getLCSLength(str1,str2){
    var h = str1.length;
    var v = str2.length;
    var dp =[];
    var len =0;
    for(let i=0;i<h;i++){
        var item = [];
        item.push(str1[i]==str2[0] ? 1 : 0);
        dp.push(item);
    }
    for(let j =0;j<v;j++){
        dp[0][j]= str1[0]==str2[j] ? 1 : 0;
    }
    for(let i=1;i<h;i++){
        for(let j=1;j<v;j++){
            if(str1[i]==str2[j]){
                dp[i][j]=dp[i-1][j-1]+1;
                if(dp[i][j]>len){
                    length = dp[i][j];
                }
            }else{
                dp[i][j]=0;
            }

        }
    }
    return length;

}
console.log(getLCSLength(a,b));