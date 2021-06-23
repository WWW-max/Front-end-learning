function func1(){
    let arr=[1,2,3,3,2];
    console.log(arr);
    let arr2 = new Set(arr);
    console.log('利用Set去重之后: ');
    console.log(arr2);
}
func1();

function func2(){
    let arr= [1,1,2,2,1,3,3];
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
             if(arr[i]==arr[j]){
                 arr.splice(j,1);
                 j--;
             }
        }
    }
    console.log('利用双重for循环去重');
    console.log(arr);
}
func2();

function func3(){
    let arr =[1,1,2,3,1,3,3];
    let map = new Map();
    let arr2=new Array();
    for(let i=0;i<arr.length;i++){
        if(map.has(arr[i])){
            map.set(arr[i],true);
        }else{
            map.set(arr[i],false);
            arr2.push(arr[i]);
        }
    }
    console.log('利用Map去重之后：');
    console.log(arr2);
}
func3();

function func4(){
    let arr= [1,1,2,1,3,3,1];
    let arr2 = [];
    for(let i=0;i<arr.length;i++){
        if(!arr2.includes(arr[i])){
            arr2.push(arr[i]);
        }
    }
    
    console.log('利用includes()方法去重之后：');
    console.log(arr2);
}
func4();