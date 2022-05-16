;
(function (window) {
  let CanvasUtil = {};

  /**
   * 设置画布的大小
   * @param {*} canvas
   * @param {*} width
   * @param {*} height
   * @returns
   */
  CanvasUtil.setCanvasSize = function(canvas, width, height) {
    let W = canvas.width = width;
    let H = canvas.height = height;
    return {W, H};
  }

  /**
  *获取鼠标在元素上的坐标
  * @param {*} ele
  * @returns {x: 数字, y: 数字}
  */
  CanvasUtil.getOffset = function (element) {
    let mouse = { x: 0, y: 0 };
    element.addEventListener('mousemove', function (e) {
      let {x, y} = CanvasUtil.eventWrapper(e);
      mouse.x = x;
      mouse.y = y;
    });
    return mouse;
  }

  /**
   * 坐标系转换
   * @param {*}} event
   * @returns {x: 数字, y: 数字}
   */
  CanvasUtil.eventWrapper = function (event) {
    let { pageX, pageY, target } = event;
    let { left, top } = target.getBoundingClientRect();
    return { x: pageX - left, y: pageY - top };
  }

  /**
   * 角度转弧度
   * @param {*} angle
   * @returns
   */
  CanvasUtil.toRad = function(angle) {
    return angle * Math.PI / 180;
  }

  /**
   * 弧度转角度
   * @param {*} rad
   * @returns
   */
  CanvasUtil.toAngle = function(rad) {
    return rad * 180 / Math.PI;
  }

  /**
 * canvas 绘制箭头
 * @param {CanvasRenderingContext2D} ctx Canvas上下文
 * @param {Number} fromX 开始x坐标
 * @param {Number} fromY 开始y坐标
 * @param {Number} toX 结束x坐标
 * @param {Number} toY 结束y坐标
 * @param {Number} theta 箭头角度（角度值）
 * @param {Number} headlen 箭头斜线的长度
 * @param {Number} width 箭头粗细宽度
 * @param {*} color 箭头颜色
 */
    CanvasUtil.drawArrow = function (ctx, fromX, fromY, toX, toY, cfg) {
    // theta, headlen, width, color
    var config = cfg || {
      theta: 30,
      headlen: 10,
      width: 1,
      color: 'red'
    };
    config.theta = config.theta || 30;
    config.headlen = config.headlen || 10;
    config.width = config.width || 1;
    config.color = config.color || 'red';

    var { theta, headlen, width, color } = config;
    theta = typeof (theta) != 'undefined' ? theta : 30;
    headlen = typeof (theta) != 'undefined' ? headlen : 10;
    width = typeof (width) != 'undefined' ? width : 1;
    color = typeof (color) != 'color' ? color : '#000';
    // 计算各角度和对应的P2,P3坐标
    var angle = Math.atan2(fromY - toY, fromX - toX) * 180 / Math.PI,
      angle1 = (angle + theta) * Math.PI / 180,
      angle2 = (angle - theta) * Math.PI / 180,
      topX = headlen * Math.cos(angle1),
      topY = headlen * Math.sin(angle1),
      botX = headlen * Math.cos(angle2),
      botY = headlen * Math.sin(angle2);
    ctx.save();
    ctx.beginPath();
    var arrowX = fromX - topX;
    var arrowY = fromY - topY;
    ctx.moveTo(arrowX, arrowY);
    ctx.moveTo(fromX, fromY);
    ctx.lineTo(toX, toY);
    arrowX = toX + topX;
    arrowY = toY + topY;
    ctx.moveTo(arrowX, arrowY);
    ctx.lineTo(toX, toY);
    arrowX = toX + botX;
    arrowY = toY + botY;
    ctx.lineTo(arrowX, arrowY);
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.stroke();
    ctx.restore();
  },


  // 将工具对象挂载到全局作用域
  window.$canvasUtil = CanvasUtil;
})(window);
