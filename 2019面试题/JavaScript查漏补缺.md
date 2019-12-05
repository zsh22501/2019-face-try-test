### 事件流
从页面中接受事件的顺序
事件流有三种：事件冒泡流、事件捕获流、DOM事件流

### 事件冒泡
从事件开始时的有最具体的元素接收，然后逐级向上传播到较为不具体的节点

### 事件捕获
让不太具体的节点更早的接收到事件，而最具体的节点最后接收事件，在事件达到预定目标之前捕获它

* 简述DOM与jQuery关系
jQuery对象是DOM对象的集合，可以通过`'[索引]'`的方式将jQuery对象转换为DOM对象；
DOM对象转化为jQuery的方式是`'$(DOM)'`

* 简述事件绑定方法，并讨论兼容性
HTML事件绑定 无兼容性
DOM0级事件绑定 无兼容性
DOM2级事件绑定 非IE8及以下浏览器：addEventListener()
                IE8及以下浏览器：attachEvent()

* 原型链的理解？
JS完全依靠原型链来实现继承，实例可以调用原型中的属性和方法。子构造函数的原型对象是父构造函数的实例。

* 简述Ajax机制以及原生Ajax的实现机制
Ajax是前后端数据数据交互的技术，不会导致页面重载（使用脚本操作HTTP和Web服务器进行数据交互）
Ajax机制：通过创建XMLHttopRequest对象与服务器进行数据交换，向服务器发送请求，获取服务器的响应。
原生Ajax的实现机制：
```javascript
var xmlhttp = new XMLHTTPRequest();
xmlhttp.open(method,url,async);
xmlhttp.send(string);
xmlhttp.onreadystatechange = function(){
  if(xmlhttp.status==400&&xmlhttp.readyState==4){
    console.log(xmlhttp.responseText);
  }
}
```

* JS函数调用的四种方法
函数调用模式、方法调用模式、构造器调用模式、apply/call调用模式

* JS跨域
http:// www  .  abc.com  : 8080   /  src/jquery.js
 协议  子域名     主域名     端口号    请求资源地址
因为JavaScript同源策略的限制，a.com域名下的js无法操作b.com域名下的对象。
跨域的严格一点的定义是：只要协议，域名，端口有任何一个的不同，就被当作是跨域。

* 什么是Cookie？和Web Storage的产生有何关联？Web Storage的两个主要目标是？
存储在用户本地终端上的数据。
指某些网站为了辨别用户身份，进行session跟踪而存储在用户本地终端上的数据。
但是Cookie的容量有限，并且Cookie会跟随请求一并发送给服务器，不够快速，最重要的是，
Cookie是有Web服务器保存在用户浏览器中上的小文本文件，它包含有关用户的信息，所以极不安全。
于是，HTML5提出了Web Storage，Web Storage的容量比Cookie大的多，更加的安全和快速，存在Web Storage
中的数据不会发送给服务器，只用于用户请求网站数据上。
主要目标：
1. 提供一种在Cookie之外存储会话数据的途径；
2. 提供一种存储大量可以跨会话存在的数据的机制。

* localStorage和sessionStorage是什么?区别是什么?
sessionStorage 用于将浏览数据存储在session中，当前选项卡关闭的话，该seesion中的数据就会被销毁。
localStorage 用于将浏览数据客户端本地，除非用户主动删除数据，否则即使关闭浏览器，数据也不会消失。
区别：前置只能将数据保存在当前选项卡中，而后者将数据保存在客户端本地的硬盘设备中

* Web Worker的实现方式是?有什么作用?
实现方式：
创建一个外部JS文件，使用onmessage监听，使用postMessage发送数据
//web.js 后台线程
onmessage = function(event){
  event.data 里的是主线程给后台线程的数据
  ...
  postMessage(发送给主线程的数据);
}
在另一个文件中，创建Worker对象，使用onmessage监听，使用postMessage发送数据
//index.html 主线程
var worker = new Worker('web.js');
worker.onmessage = function(event){
  event.data 里的是后台线程给主线程的数据
  ...
}
postMessage(发送给后台线程的数据);
作用：将耗时的代码放到后台线程去执行，可以不阻塞主线程代码的执行，有结果就返回给主线程，节省代码的执行时间。

### JS中的强制类型转换和隐式类型转换
强制类型转换：Number,String,Boolean,toString(null,undefined没有此方法),parseInt,parseFloat
隐式类型转换：算数运算符(+ - * / %)，逻辑运算符(&& || !)，关系运算符(== != > <...)

### JavaScript为弱类型语言的特征？
1. 使用var关键字声明的变量可重复声明
2. 声明变量不需指定类型
3. 对变量赋值也没有类型检查
4. 允许隐式类型转换

### 闭包是什么？闭包的特性？对页面有什么影响？闭包的好处？
闭包：有权访问另一个函数作用域中的变量的函数
特性：
1. 函数嵌套函数
2. 函数内部可以访问外部的参数和变量
3. 参数和变量不会被垃圾回收机制(GC:Garbage Colleaction)回收
影响：
通过使用闭包，我们可以做很多事情。比如模拟面向对象的代码风格；更优雅、更简洁的表达出代码；在某些方面提升代码的执行效率。
好处：
1. 保护函数内的变量安全。
2. 在内存中维持一个变量。
3. 实现JS私有属性和私有方法
4. 避免全局变量的污染


### DOM中如何创建新节点？
document.createElement() 创建一个元素节点
document.createTextNode() 创建一个文本节点
document.createAttribute() 创建有一个属性节点

### 写一个function，清除字符串前后的空格。（兼容所有浏览器）
IE8及以下浏览器不支持trim()方法
```javascript
String.prototype.trim= function(){
return this.replace(/^\s+/,"").replace(/\s+$/,"");
}
```
### innerHTML和outerHTML的区别？
innerHTML 设置或获取位于对象起始和结束标签内的HTML
outerHTML 设置或获取对象本身及其内容的HTML

### ajax请求的时候get 和post方式的区别？
1. GET请求会将参数拼在URL后进行传递，而POST请求则是将参数放在请求体中发送给Web服务器
2. GET请求有数据有限制(大约是2KB)，POST请求无限制
3. GET请求不安全，POST请求更加的安全
3. GET请求不用设置请求头，而POST请求需要

### 解释jsonp的原理，以及为什么不是真正的ajax
原理：动态创建script标签,利用script标签的src属性可以获取任何域下的js脚本
和AJAX的区别：
1. ajax和jsonp的调用方式很像，目的一样，都是请求url，然后把服务器返回的数据进行处理，因此jquery等框架都把jsonp作为ajax的一种形式进行了封装；
2. 实质不同
Ajax的核心是通过XMLHttpRequest获取数据
jsonp的核心是动态添加script标签调用服务器提供的js脚本
3. jsonp只支持get请求，ajax支持get和post请求

### document load 和document ready的区别
页面加载完成有两种事件
1. load是当页面所有资源(包括DOM文档树，css文件，js文件，图片等)全部加载完成后，执行一个函数，load方法就是onload事件
2. $(document).ready()是当DOM文档树加载完成后执行一个函数 （不包含图片，css等）所以会比load较快执行
在原生的js中不包括ready()这个方法，jQuery才有

### 函数声明与函数表达式的区别？
1. 函数声明会被提升到当前作用域的顶部，函数表达式不会，函数表达式是将一个匿名函数赋值给一个变量，变量声明会提升而赋值不会；
2. 函数声明一定会有函数名，而函数表达式一般不会有函数名(作为标识符，不可以执行)
3. 函数声明不是一个完整的语句，不能出现在if-else，for循环等语句中

### 使用new关键字调用构造函数创建对象的步骤：
1. 创建一个新对象
2. 将构造函数的作用域赋给新对象（this指向这个新对象）
3. 执行构造函数中的代码
4. 返回新对象

### js延迟加载的方式有哪些？
1. defer 属性
2. async 属性
3. 动态创建DOM方式
4. 使用jQuery的getScript()方法
5. 使用setTimeout超时调用
6. 让js文件最后加载

### Flash、Ajax各自的优缺点，在使用中如何取舍？
Flash适合处理多媒体、矢量图形、访问机器；对CSS、处理文本上不足，不容易被搜索。
Ajax对CSS、文本支持很好，支持搜索；多媒体、矢量图形、机器访问不足。
共同点：与服务器的无刷新传递消息、用户离线和在线状态、操作DOM

### 程序中捕获异常的方法？
try{ //foo }catch(err){ //异常处理 }

###jQuery的Ajax的优缺点？
1. 本身是针对MVC的编程，不符合现在前端MVVM的浪潮。
2. 基于原生的XHR(XMLHttpRequest)开发，XHR本身的架构不清晰，已经有了fetch的替代方案。
3. jQuery整个项目太大，单纯使用ajax却要引入整个jQuery不合理(采取打包方案又不能享受CDN服务)

### axios是基于promise实现对ajax的一种封装，就像jQuery实现ajax的封装

### axios的优缺点？
1. 从node.js创建http请求
2. 支持Promise API
3. 提供了一些并发请求的接口
4. 在浏览器中创建XMLHttpRequest对象