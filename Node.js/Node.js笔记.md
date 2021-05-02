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



