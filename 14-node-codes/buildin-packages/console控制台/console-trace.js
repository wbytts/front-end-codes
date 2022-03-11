// 打印函数的调用堆栈踪迹;

const function2 = () => console.trace();
const function1 = () => function2();
function1();
