//1.引入express
const express = require('express');
//2.创建应用对象
const app = express();
//3.创建路由规则
app.get('/',(request,response) =>{
    response.send('Hello express');//设置响应
});
//4.监听端口启动服务
app.listen(8000,()=>{
    console.log('服务已经启动. 8000端口监听中。。。')
})

//终端使用node express基本使用.js 运行
//前端输入localhost:8000