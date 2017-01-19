var myImage = (function() {
    var imgNode = document.createElement('img');
    var pNode = document.querySelectorAll('li')[0];
    pNode.appendChild(imgNode);

    return {
        setSrc: function(src) {
            imgNode.src = src;
        }
    }
})();

var proxyImage = (function() {
    var img = new Image;
    img.onload = function() {
        myImage.setSrc(this.src);
    }
    return {
        setSrc: function(src) {
            myImage.setSrc('loading.gif');
            img.src = src;
        }
    }
})();

proxyImage.setSrc('http://pic2.cxtuku.com/00/02/31/b945758fd74d.jpg');

// 在图片没有下载完成时，使用loading图片。在图片下载好之后，直接替换为新图片。