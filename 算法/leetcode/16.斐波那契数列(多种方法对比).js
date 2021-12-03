/**
 * @param {number} n
 * @return {number}
 */
/**斐波那契数列：0 1 1 2 3 5  爬楼梯：1 2 3 5*/
/**法四：迭代(不使用数组，使用res,a,b三个变量，空间复杂度为O(1)) */
var fib = function(n) {
    if(n<=0) return 0;
    if(n<=1) return 1;
    var a =0;
    var b =1;
    var res;
    for(let i =2;i<=n;i++){
        res = (a + b)%1000000007;
        a=b;
        b=res;
    }
    return res;
};

/**法一：递归  超时 */
// var fib = function(n) {
//     if(n<=0) return 0;
//     if(n<=1) return 1;
//     return (fib(n-1)+fib(n-2))%1000000007;
// };

/**法二：递归加备忘录算法(缓存)超时 */
// var fib = function(n) {
//     if(n<=0) return 0;
//     if(n<=1) return 1;
//     var map =new Map();
//     if(map.has(n)){
//         return map.get(n);
//     }else{
//         var res = (fib(n-1)+fib(n-2))%1000000007
//         map.set(n,res);
//         return res;
//     }
// };

/**法三：迭代(使用数组空间复杂度为O(n)) */
// var fib = function(n) {
//     if(n<=0) return 0;
//     if(n<=1) return 1;
//     var res = [];
//     res[0]=0;
//     res[1]=1;
//     for(let i =2;i<=n;i++){
//        res[i] = (res[i-1] + res[i-2])%1000000007;
//     }
//     return res[n];
// };


