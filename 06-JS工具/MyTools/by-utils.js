/**
 * 浏览器环境，js常用方法封装
 * author: wangby
 */
;(function(window) {
  var ByUtils = {};
  var document = window.document;

  ByUtils.select = function(selector) {
    return document.querySelector(selector);
  };

  ByUtils.selectAll = function(selector) {
    return document.querySelectorAll(selector);
  };

  /**
   * 检查浏览器是否支持某个CSS属性
   */
  ByUtils.isPropertySupported = function(property) {
    if (property in document.body.style) return true;
    var prefixes = ["Moz", "Webkit", "O", "ms", "Khtml"]; // 考虑浏览器前缀
    var prefProperty = property.charAt(0).toUpperCase() + property.substr(1);

    for (var i = 0; i < prefixes.length; i++) {
      if (prefixes[i] + prefProperty in document.body.style) return true;
    }

    return false;
  };

  /**
   * 兼容版本的元素文本内容操作方法
   *    如果不传 text，返回文本内容
   *    如果传入了 text，则将内容修改为 text
   *
   * @param obj：要操作的DOM元素
   * @param text：要操作的文本内容（字符串）
   * @returns 如果不传text，则返回文本内容
   */
  ByUtils.text = function(obj, text) {
    // IE或非IE高版本
    if (document.all) {
      if (typeof text == "undefined") {
        return obj.innerText;
      } else {
        obj.innerText = text;
      }
    } else {
      if (typeof text == "undefined") {
        return obj.textContent;
      } else {
        obj.textContent = text;
      }
    }
  };

  /**
   * 获取元素的CSS属性
   */
  ByUtils.getStyle = function (element, styleName) {
    if (element.currentStyle) {
      return element.currentStyle[styleName];
    } else {
      var computedStyle = window.getComputedStyle(element, null);
      return computedStyle[styleName];
    }
  }

  /**
   * 元素匀速运动
   */
  ByUtils.motionUniform = function(element, targetStyle, callback) {
    clearInterval(element.timer); // 清除这个元素身上的定时器
  };

  /**
   * 封装元素运动函数
   * @param {*} element 作目标元素
   * @param {*} json 目标样式的json（top、right、left、bottom）
   * @param {*} config 配置项
   * @param {*} fun 完成之后的回调函数
   */
  ByUtils.cssMotionAnimate = function(element, json, config, fun) {
    clearInterval(element.timer);
    var isStop = false;
    element.timer = setInterval(function() {
      console.log('计时器开始');
      isStop = true;
      for (var key in json) {
        console.log('当前属性', key);
        var current;
        //如果传入的属性是opacity,取浮点型数
        if (key === 'opacity') {
          current = parseFloat(ByUtils.getStyle(element, key));
        } else {
          current = parseInt(ByUtils.getStyle(element, key));
        }
        console.log('当前属性值', current);
        //没问题
        var target = json[key];
        //只要不是opacity 都做向上或向下取整操作
        // var step = (target - current) / 10; // 越到最后越慢
        var step = 1;
        console.log('步进', step);
        if (key !== 'opacity') {
          step = step > 0 ? Math.ceil(step) : Math.floor(step);
        }
        current += step;
        if (key === 'opacity') { //判断暂停动画
          if (Math.abs(target - current) > 0.01) {
            isStop = false;
          } else {
            current = target;
          }
          element.style[key] = current + '';
        } else {
          if (Math.abs(target - current) > Math.abs(step)) {
            isStop = false;
          } else {
            current = target; // 强制将此属性设到target
          }
          if (key === 'zIndex') {
            element.style.zIndex = Math.round(current); //四舍五入
          } else {
            element.style[key] = current + 'px';
          }
        }
      }
      // 检测元素是否停止，如果没有停止，则清除定时器
      if (isStop) {
        clearInterval(element.timer);
        console.log('完成动画');
        if (fun && typeof fun == 'function') fun();
      }
    }, 100);
  }



  window.byTool = ByUtils;
})(window);
