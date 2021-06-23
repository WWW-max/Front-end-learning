// 数组扁平化
// 利用ES6中新增的arr.flat(depth) depth = 多维数组维数-1  默认为1
// Infinity 表示任意维数，不需要知道多维数组的维数
(
    function flat(arr){
        arr=arr.flat(Infinity); 
        console.log("利用flat(depth)扁平化之后:");
        console.log(arr);
    }
)([1,[2,3,[4,5]]])

//toString和split
;(
    function flat(arr){
    arr =arr.toString().split(',').map(
        item =>{ return Number(item);}
    );
    console.log('利用toString和split扁平化之后:');
    console.log(arr);
    }
)([1,[2,3,[4,5]]])

//join和split
;(
    function flat(arr){
        arr= arr.join().split(',').map(item => {return Number(item)})
        console.log('利用join和split扁平化之后:');
        console.log(arr);
    }
)([1,[2,3,[4,5]]])

//for循环
    function flat(arr){
        let arr2 =[];
        for(let i = 0 ;i<arr.length;i++){
            if(Array.isArray(arr[i])){
                arr=arr.concat(flat(arr[i]));
            }else{
                arr2.push(arr[i]);
            }
        }
       return arr2;
     
    }

let res =flat([1,[2,3,[4,5]]])
console.log('利用for循环扁平化之后:');
console.log(res);