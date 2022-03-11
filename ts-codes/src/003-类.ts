export default 1;

class Person {
  // 定义属性
  name: string;
  age: number;
  // 定义类属性（静态属性）
  static x: number = 3;
  /// 只读属性
  readonly y: number = 4;

  // 构造函数
  // this表示当前的实例（在构造函数中、实例方法中）
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  // 方法
  show() {
    console.log(`name=${this.name}, age=${this.age}`);
  }

}

const p = new Person('张三', 18);

class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age;
  }

  sayHello() {
    console.log('动物在叫~~~');
  }
}

/*
使用继承后，子类将会拥有父类所有的方法和属性
如果子类想要更多的属性和方法，直接写就行
*/
class Dog extends Animal {
  // 子类可以覆盖父类的方法
  sayHello() {
    console.log('汪汪汪~~~');
  }
}

class Cat extends Animal {
  sayHello() {
    console.log('喵喵喵~~~');
  }
}

let c = new Cat('咪咪', 18);
