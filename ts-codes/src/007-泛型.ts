export default 1;

function fn1(a: number): number {
  return a;
}


function fn2<T>(a: T): T {
  return a;
}

fn2(10); // 类型自动推断
fn2<number>(10); // 手动指定类型
