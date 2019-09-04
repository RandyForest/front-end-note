/**
 * 需要node.js运行
 */
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// 创建XMLHttpRequest对象
var xhr = new XMLHttpRequest();

// 设置
xhr.open('GET', 'http://www.baidu.com');
xhr.withCredentials = true
xhr.setRequestHeader('Access-Control-Allow-Credentials', 'true');

// 执行加载钩子逻辑
xhr.onload = function () {
    console.log('AllResponseHeaders: '+xhr.getAllResponseHeaders());
    // console.log('Access-Control-Allow-Credentials: ' + xhr.getRequestHeader('Access-Control-Allow-Credentials'));
    // console.log('bdqid: ' + xhr.getResponseHeader('bdqid'));
    // console.log('ResponseText: '+this.responseText);

}

// 发送
xhr.send();


