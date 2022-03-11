// 注意：process 不需要 "require"，它是自动可用的。
//const process = require("process");
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/asd") {
    // 当接收到 /asd 请求的时候，退出程序
    // 默认情况下，退出码为 0，表示成功。
    // 不同的退出码具有不同的含义，可以在系统中用于程序与其他程序的通信。
    process.exitCode = 1;
    process.exit(1); // 退出时，发送退出码
  }
  /*
    req：请求对象
    res：响应对象
  */
  res.statusCode = 200; // 设置响应状态码
  /*
    设置 Content-Type 响应头：
      text/plain 单独，有时候会乱码
      可以用 text/plain;charset=utf-8
  */
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  res.write("Hello World\n");
  // 最后一句输出要用 end，表示输出流结束
  res.end("你好世界\n");
});

/*
  server.listen(端口, 主机, 启动成功回调函数)
*/
server.listen(port, hostname, () => {
  console.log(`服务器运行在 http://${hostname}:${port}/`);
});
