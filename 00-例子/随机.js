/**
 * 返回 从 m 到 n 之间的随机整数
 * @param {Integer} m
 * @param {Integer} n
 */
function rand(m, n) {
  return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
}


/**
 * 获取随机颜色
 */
function getRandomColor() {
  var allc = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f';
  var allc_arr = allc.split(',');
  var c = '#';
  for (var i = 0; i < 6; i++) {
    var random = parseInt(Math.random() * allc_arr.length);
    c += allc_arr[random];
  }
  return c;
}
