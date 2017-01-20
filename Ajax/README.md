# Ajax

## GET请求

通常用于向服务器查询某些信息。在必要时，可以将查询字符串参数追加到URL的末尾，以便将信息发送给服务器。
对于XHR而言，位于传入open()方法的URL末尾的查询字符串必须经过正确的编码才行。
查询字符串的每个参数的名称和值都必须使用encodeURIComponent()进行编码，然后才能放到URL的末尾，而且所有的名-值对儿都必须使用&分隔
例如：xhr.open('GET', 'example.php?name1=value1&name2=value2')

## 使用表单编发发起GET和POST请求

getData(url, data, callback)
postData(url, data, callback)

## 使用JSON编码主体发起POST请求

postJSON(url, data, callback)

## progress事件

lengthComputable 进度信息是否可用
position 已接收的字节数
totalSize 根据响应头部确定的预期字节数