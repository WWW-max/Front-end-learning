// 声明一个变量a,同时指定它的类型为number
let a: number;
// a='hello';//此代码报错，变量a的类型为number不能赋值字符串
let b: string;
b='hello';

// 声明完变量后直接赋值,TS会自动对变量进行类型检测
let c:boolean =false;
let d =true;

//对函数形参和返回值指定类型
function sum( a:number,b:number):number{
    return a+b;
}
sum(1,2);