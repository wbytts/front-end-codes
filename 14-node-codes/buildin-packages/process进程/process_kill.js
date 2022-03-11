// SIGKILL 是告诉进程要立即终止的信号，理想情况下，其行为类似于 process.exit()。
// SIGTERM 是告诉进程要正常终止的信号。它是从进程管理者（如 upstart 或 supervisord）等发出的信号。
// 可以从程序内部另一个函数中发送此信号：
process.kill(process.pid, "SIGTERM");
// 或从另一个正在运行的 Node.js 程序、或从系统中运行的其他任何的应用程序（能知道要终止的进程的 PID）。
