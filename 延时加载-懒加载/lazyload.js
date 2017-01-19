
function getElementTop(ele) {
    var top = ele.offsetTop;
    var current = ele.offsetParent;
    while (current !== null) {
        top += current.offsetTop;
        current = current.offsetParent;
    }
    return top;
}

var lazyload = function() {
    var seeHeight = document.documentElement.clientHeight; //可见区域高度
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
    for (var i = n; i < num; i++) {
        if (getElementTop(imgs[i]) < seeHeight + scrollTop) {
            if (imgs[i].getAttribute("src") == "loading.gif") {
                imgs[i].src = imgs[i].dataset.src;
            }
            n = i + 1;
        }
    }
}

var imgs = document.querySelectorAll('img');
var num = imgs.length;
var n = 0; // 存储图片加载到的位置，防止从第一张开始遍历
lazyload();
window.onscroll = lazyload;

