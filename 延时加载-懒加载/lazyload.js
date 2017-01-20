
function getElementTop(ele) {
    var top = ele.offsetTop;
    var current = ele.offsetParent;
    while (current !== null) {
        top += current.offsetTop;
        current = current.offsetParent;
    }
    return top;
}

var lazyload = (function() {
    var n = 0;// 存储图片加载到的位置，防止从第一张开始遍历
    return {
        load: function (elms) {
            var num = elms.length;
            var seeHeight = document.documentElement.clientHeight; //可见区域高度
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop; //滚动条距离顶部高度
            for (var i = n; i < num; i++) {
                if (getElementTop(elms[i]) < seeHeight + scrollTop) {
                    if (elms[i].getAttribute("src") == "loading.gif") {
                        elms[i].src = elms[i].dataset.src;
                    }
                    n = i + 1;
                }
            }
        }
    }
})();

var imgs = document.querySelectorAll('img'); 

lazyload.load(imgs);

window.onscroll = function() {
    lazyload.load(imgs);
};
