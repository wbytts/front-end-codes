// 声明构造函数
function MyPromise(executor) {
  // 添加属性
  this.PromiseState = 'pending'; // 默认的状态为 pending
  this.PromiseResult = null;
  this.callbacks = [];

  const self = this;

  // resolve 函数
  function resolve(data) {
    // 修改对象的状态（promiseState）
    self.PromiseState = 'fulfilled';
    // 设置对象的结果值（promiseResult）
    self.PromiseResult = data;
    // 调用成功的回调函数
    self.callbacks.forEach(item => item.onResolved(data))
  }
  // reject 函数
  function reject(data) {
    // 修改对象的状态（promiseState）
    self.PromiseState = 'rejected';
    // 设置对象的结果值（promiseResult）
    self.PromiseResult = data;
    // 调用失败的回调函数
    self.callbacks.forEach(item => item.onRejected(data))
  }

  // 同步调用【执行器函数】
  executor(resolve, reject);
}

// 添加 then 方法
MyPromise.prototype.then = function (onResolved, onRejected) {
  if (typeof onResolved !== 'function') {
    onResolved = value => value;
  }
  if (typeof onRejected !== 'function') {
    onRejected = reason => {
      throw reason;
    };
  }
  return new MyPromise((resolve, reject) => {
    const callback = type => {
      try {
        let result = type(this.PromiseResult);
        if (result instanceof MyPromise) {
          result.then(resolve, reject);
        } else {
          resolve(result);
        }
      } catch (e) {
        reject(e);
      }
    };
    // 调用回调函数
    if (this.PromiseState === 'fulfilled') {
      callback(onRejected);
    }
    if (this.PromiseState === 'rejected') {
      onRejected(this.PromiseResult);
    }
    if (this.PromiseState === 'pending') {
      // 保存回调函数
      this.callbacks.push({
        onResolved: () => callback(onResolved),
        onRejected: () => callback(onRejected)
      })
    }
  })
};

MyPromise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
};

MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => {
    if (value instanceof MyPromise) {
      value.then(resolve, reject);
    } else {
      resolve(value);
    }
  });
};

MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => {
    reject(resason);
  });
};

MyPromise.all = function (ps) {
  return new MyPromise((resolve, reject) => {
    let count = 0;
    for(let i=0; i<ps.length; i++) {
      ps[i].then(v => {
        count++;
        if(count === ps.length) {
          resolve();
        }
      }, r => {

      });
    }
  });
};
