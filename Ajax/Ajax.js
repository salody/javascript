/**
 * Created by salody on 2017-01-20.
 */

/**
 * encodeFormData(data)函数
 * 将Javascript对象格式的data转变为表单编码
 * data属性，
 * 如果是名/值对，使用application/x-www-form-urlencoded格式
 */
function encodeFormData(data) {
    if (!data) {
        return "";    // 一直返回字符串
    }
    var pairs = [];          // 用于保存名=值对
    for (var name in data) {
        if (!data.hasOwnProperty(name)) continue;         // 跳过继承属性
        if (typeof data[name] === 'function') continue;    // 跳过方法
        var value = data[name].toString();            // 把值转化为字符串
        name = encodeURIComponent(name.replace('%20', '+'));   // 把空格换成加号
        value = encodeURIComponent(value.replace('%20', '+'));
        pairs.push(name + '=' + value);
    }
    return pairs.join('&');
}

// 使用表单编码发起POST请求
function postData(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open("POST", url);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && callback) {
            callback(request);
        }
    };
    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    request.send(encodeFormData(data));
}

// 使用表单编码发起GET请求
function getData(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open("GET", url + '?' + encodeFormData(data));
    request.onreadystatechange = function () {
        if (request.readyState === 4 && callback) {
            callback(request);
        }
    };
    request.send(null);
}

// 使用JSON编码主体发起POST请求
function postJSON(url, data, callback) {
    var request = new XMLHttpRequest();
    request.open('POST', url);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && callback) {
            callback (request);
        }
    };
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(data));
}

/**
 * progress事件
 * e.target是XHR对象
 * lengthComputable 进度信息是否可用
 * position 已接收的字节数
 * totalSize 根据响应头部确定的预期字节数
*/

function requestProgress(url) {
    var request = new XMLHttpRequest();
    // onload 在收到完整响应数据时触发load事件
    request.onload = function () {
        if (request.readyState === 4) {
            console.log(request.responseText);
        } else {
            console.log(request.status);
        }
    };
    request.onprogress = function (e) {
        var divStatus = document.getElementById('status');
        if (e.lengthComputable) {
            divStatus.innerHTML = 'Received' + e.position + 'of' + e.totalSize + 'bytes';
        }
    };
    request.open('get', url);
    request.send(null);
}













