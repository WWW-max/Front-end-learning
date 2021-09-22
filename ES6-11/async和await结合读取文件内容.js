// 引入fs模块
const fs = require('fs');
const { mainModule } = require('process');

function readfile1() {
    return new Promise((resolve, reject) => {
        fs.readFile("C:\\Users\\ASUS\\Desktop\\nodefs1.txt", (err, data) => {
            //    如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data);
        });
    });
}
function readfile2() {
    return new Promise((resolve, reject) => {
        fs.readFile("C:\\Users\\ASUS\\Desktop\\nodefs2.txt", (err, data) => {
            //    如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data);
        });
    });
}
function readfile3() {
    return new Promise((resolve, reject) => {
        fs.readFile("C:\\Users\\ASUS\\Desktop\\nodefs3.txt", (err, data) => {
            //    如果失败
            if (err) reject(err);
            // 如果成功
            resolve(data);
        });
    });
}

async function main(){
    /**
     * 看起来和同步调用三个函数很类似，但是确实异步的
        同步调用：fun1();
                 fun2();
                 fun3();
     */
    let f1 =await readfile1();
    let f2 =await readfile2();
    let f3 =await readfile3();

    console.log(f1.toString());
    console.log(f2.toString());
    console.log(f3.toString());
}

main();