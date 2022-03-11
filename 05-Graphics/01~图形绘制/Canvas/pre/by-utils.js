(function (window) {
    // 工具类构造函数
    let By = function () {

    };

    By.prototype.$id = function (id) { /*返回页面中指定id的元素*/
        return window.document.getElementById(id);
    };


    By.prototype.$selector = function(s) {
        return window.docuenmt.querySelector(s);
    }

    /**
         *对Date的扩展，将 Date 转化为指定格式的String
         *月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
         *年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
         *例子：
         *(new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
         *(new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
         */
    Date.prototype.format = function (fmt) {
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) {
                fmt = fmt.replace(RegExp.$1,
                    (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            }
        return fmt;
    };

    // 日期格式化
    By.prototype.formatDate = function (d, fmt) {
        return d.format(fmt);
    };

    // 获取元素样式
    By.prototype.getStyle = function (obj, name) {
        if (window.getComputedStyle) {
            return getComputedStyle(obj, null)[name];
        } else {
            return obj.currentStyle[name];
        }
    };

    // 控制台打印
    By.prototype.log = function (...args) {
        try {
            console.log(...args);
        } catch (exception) {
            return;
        }
    };

    /**
     * canvas转图片
     * @param canvas canvas元素对象
     */
    By.prototype.canvasToImage = function (canvas) {
        window.open(canvas.toDataURL(), "CanvasImage", "left=0,top=0,width=" + canvas.width + ",height=" + canvas.height + ",toolbar=0,resizable=0");
    };

    window.requestAnimationFrame = (function () {
        return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAninationFrame ||
            window.oRequestAninationFrame ||
            window.msRequestAninationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            }
    })();



    // 角度转弧度
    By.prototype.degToRad = function (deg) {
        return (Math.PI / 180) * deg;
    };

    By.prototype.xxx = function() {

    }



    let by = new By();
    // 将 by 挂载到 window 对象上
    window.by = by;
})(window);
