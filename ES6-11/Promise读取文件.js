//引入fs模块
const fs = require('fs');
// 异步读取
// fs.readFile("C:\\Users\\ASUS\\Desktop\\nodefs.txt",function(err,data){
//        if(err) throw err;
//        console.log(data.toString());
// });

// 使用Promise封装
const p = new Promise((resolve,reject)=>{
        fs.readFile("C:\\Users\\ASUS\\Desktop\\nodefs1.txt",function(err,data){
            // 失败  
            if(err) reject(err);
            resolve(data);
        });
});
p.then((value)=>{
      console.log(value.toString());
},(reason)=>{
      console.log("读取失败！");
});