// 1.字面量：限制变量的值就是该字面量的值
let a:10;
a=10;
// a=11;//报错

let c:boolean|string
c=true;
c='hello';

//2.any：表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用ts时，不建议使用any类型
let d:any;
d=10;
d='hello';
d=true;

//声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any(隐式的any)
let d;
d=10;
d='hello';
d=true;

// 3.unkown表示未知类型的值
let e:unknown;
e=10;
e="hello";
e=true;

let s:string;
s=d;//d为any类型，它可以赋值给任意变量
/**
 * unknown实际上就是一个类型安全的any,unkown类型的变量，不能直接赋值给其他变量
 */
s=e;//e为unkown类型，赋值给string类型s将报错

// 类型断言 两种写法
 s =e as string;
 s =<string>e;

//  4.void用来表示空，函数指没有返回值
function fn():void{
    
}

// 5.never 表示永远不会返回结果，连void都没有
function fn2():never{

}
