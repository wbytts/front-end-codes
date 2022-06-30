/**
 * 使用原生 node 实现一个简单的服务
 */

// http 超文本传输协议
const http = require('http');
// url 用于解析URL
const url = require('url');


// url 模块，解析URL
/*
  url.parse(xxx) 解析URL
  url.format(url_obj) 将解析结果还原为URL字符串，url.parse()的逆操作
  url.resolve(from, to) 添加或者替换地址
*/

// 定义主机名import simpleServer from './simple-server'
const hostname = '127.0.0.1';
// 定义服务端口
const port = 3000;

// 使用 http 创建服务对象
const server = http.createServer((req, res) => {

  console.log('-------------------请求处理开始---start');

  /*import simpleServer from './simple-server'
    req：请求对象
    res：响应对象
  */
  // 不处理， favicon.ico 请求
  const pathname = req.url;
  if (pathname === '/favicon.ico') {
    return;
  }

  // 获取请求路径
  console.log('请求路径:' + pathname);
  // 解析路径，且将query字符串解析为对象
  var purl = url.parse(pathname, true);
  // 打印解析后的query字符串  ?name=value&name2=value2......
  console.log('url-query:', JSON.stringify(purl.query));

  // 设置响应状态码
  res.statusCode = 200;
  /*
    设置 Content-Type 响应头：
      text/plain 单独，有时候会乱码
      可以用 text/plain;charset=utf-8
  */
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  /*
    设置响应内容
  */
  res.write('Hello World\n');
  // 最后一句输出要用 end，表示输出流结束
  res.end('你好世界123\n');
  console.log('-------------------请求处理结束---end')
});


/*
  服务对象开始监听
    server.listen(端口, 主机, 启动成功回调函数)
*/
server.listen(port, hostname, () => {
  console.log(`服务运行在 http://${hostname}:${port}/`);
});
