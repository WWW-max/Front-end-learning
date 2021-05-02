Node.js:

定义：Node.js是一个能够在服务器端 运行JavaScript的开放源代码、跨平台的**JavaScript运行环境**。

特点：Node采用Google开发的V8引擎运行js代码，使用**事件驱动、非阻塞、异步I/O模型**等技术来提高性能，

诞生：瑞安达尔利用JS写高性能web服务器

![image-20210502093820675](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20210502093820675.png)



发展：Node.js+io.js------->Node4.0------>

优点和缺点：Node的服务器是**单线程**的：Node处理请求时是单线程的，但是后台拥有一个I/O线程池

Node的用途：

1.web服务API,比如REST

2.实时多人游戏

3.后端的web服务，实现跨域，服务端的请求

4.基于web应用

5.多客户端的通信，如即时通信



运行js代码：node hello.js



ECMAScript标准的缺陷：

* 没有模块系统

* 标准库较少

* 没有标准接口

* 缺乏管理系统



模块化：

程序设计的规模达到一定程度，则需要对其进行模块化

CommonJS规范：

在Node中，一个js文件就是一个模块

在Node中，通过require()函数来引入外部模块

require()可以传递一个文件的路径作为参数，node将会自动根据路径来引入外部模块，这里的路径如果使用相对路径，必须以.或..开头，例如：　　require("./02.module.js");

使用require()引入模块以后，该函数会返回一个对象，这个对象代表的是引入的模块，var md = require("./02.module.js");

在Node中，每一个js文件中的js代码都独立运行在一个函数中，而不是全局作用域，所以一个模块中的变量和函数在其他模块中无法访问，如果要访问

只需要将需要暴露给外部的变量或方法设置为exports的属性即可

exports.x="我是02.module.js中的x";

exports.fn=function(){

};



在node中有一个全局对象global，它的作用和网页中window类似，在全局中创建的变量/函数都会作为global的属性/方法保存



当node在执行模块中的代码时，他会首先在代码的最顶部，添加如下代码：

function (exports,  require,  module,  _filename,  _dirname){

在代码的最底部，添加如下代码：

}



实际上模块中的代码都是包装在一个函数中执行的，并且在函数执行时，同时传递进了5个参数

exports：该对象用来将变量或函数暴露在外部

require：函数,用来映入外部的模块

module：module代表的是当前了模块本身，exports就是        module的属性，exports==module.exports

__filename：当前模块的完整路径

__dirname：当前模块所在文件夹的完整路径



exports和module.exports的区别：

本质上一样

通过exports只能使用.的方式来向外部暴露内部变量

exports.xxx=xxx; //类似于对象的引用

而module.exports既可以通过.的形式，也可以直接赋值

module.exports.xxx = xxx;

module.exports = { }; //类似对象本身



包（package）简介：

将一组相关的模块组合到一起，形成一组完整的工具

包由**包结构**和**包描述文件**组成

包结构：用来组织包中的各种文件

包描述文件：描述包的相关信息，以供外部读取分析

包实际上就是一个压缩文件，解压后还原为目录

规范的目录包含如下文件：

**-package.json       描述文件**

-bin    可执行二进制文件

-lib      js代码

-doc    文档

-test    测试



包描述文件用于表达非代码相关的信息

它是一个json格式的文件-package.json，位于包的根目录下

注意：json文件中不能有注释



NPM(Node Package Manager)

* CommonJS包规范是理论，NPM是其中一中实践
* 对于Node而言，NPM帮助其完成了第三方模块的发布、安装和依赖等，借助NPM, Node与第三方模块之间形成了很好的一个生态系统



NPM常用命令：

-npm  帮助说明

-npm -v   查看npm版本

-npm version 查看所有模块的版本

-npm init  初始化文件夹生成 package.json

-npm search 包名   搜索包

-npm install/i  包名   安装包

-npm install 包名 --save 安装包并添加到依赖中

-npm install 下载当前项目所依赖的包

-npm install 包名 -g 全局安装包（全局安装的包一般都是一些工具）

-npm  remove/r  包名 删除包



cnpm:   淘宝npm镜像

命令：npm install -g cnpm --registry=https://registry.npm.taobao.org



node搜索包的流程：

通过npm/cnpm下载的包都在node_modules文件夹中

通过npm/cnpm下载的包，直接通过包名引入即可

var math =require("math");

var express = require("express");

node在使用模块名字引入模块时，首先在当前目录的node_modules中寻找是否含有该模块

如果有直接使用，没有则去上一级目录的node_modules中寻找，以此类推直到找到为止，如果找到磁盘根目录依然没有，则报错



缓存区Buffer: 客户端发过来的请求是二进制文件，存储到缓冲区，响应的数据也先存储到缓冲区。

Buffer的结构和数组很像，操作的方法也和数组类似。

数组中不能存储二进制的文件，而Buffer就是专门用来存储二进制数据

使用buffer不需要引入模块，直接使用即可

var str = "hello";

var buf = Buffer.from("str");

在buffer中存储的都是二进制数据，但是在显示时都是以16进制的形式显示，buffer中每一个元素范围00-ff

var buf = new Buffer(1024);  //1kb

注意：buffer中所有构造函数都已经弃用，不推荐使用

var buf2 = Buffer.alloc(10); //创建一个10个字节的buffer

//通过索引来操作buf中的元素

buf[0]=88;

buffer一旦创建大小不能改变

只要数字在控制台或页面中输出一定是10进制，调用tostring()指定进制

console.log(buf2[2].tostring(10));  



Buffer.from(str);  //将一个字符串转换为buffer

Buffer.alloc(size);  //创建一个指定大小的Buffer

Buffer.allocUnsafe(size); //创建一个指定大小的Buffer,但是可能包含敏感数据

buf.toString();  //将缓冲区中的数据转换为字符串







