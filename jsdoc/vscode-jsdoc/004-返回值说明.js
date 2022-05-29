/**
 * @return {number} 描述
 */
function test() {}

// 函数返回 Promise 实例的情况可以这么指定类型
/**
 * @return {Promise<number>}
 */
function testPromise() {
  return new Promise(res => {
    res(1);
  });
}
