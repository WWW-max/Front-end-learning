const XMLHttpRequest =require('xmlhttprequest').XMLHttpRequest;

const p = new Promise((resolve,reject)=>{
    // 1.创建对象
    const xhr = new XMLHttpRequest();
    // 2.初始化
    xhr.open("GET", "https://www.baidu.com");
    // 3.发送
    xhr.send();
    // 4.绑定事件，处理响应结果
    xhr.onreadystatechange = function () {
        // 判断
        if (xhr.readyState === 4) {
            // 判断状态码 200 -299
            if (xhr.status >= 200 && xhr.status < 300) {
                // 表示成功
                resolve(xhr.response);
            } else {
                // 如果失败
                reject(xhr.status);
            }
        }
    }
});
// 指定回调
p.then((value) => {
    console.log(value);
}, (reason) => {
    console.log(reason);
});
