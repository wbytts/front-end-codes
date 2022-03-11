export default 1;

/*
以 abstract 开头的class是抽象类
抽象类常用来被继承
抽象类中可以添加抽象方法
*/
abstract class Animal {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name
    this.age = age;
  }

  // 抽象方法使用abstract开头
  // 抽象方法只能定义在抽象类中
  // 子类必须重写抽象方法（除非子类也是抽象类）
  abstract sayHello(): void;
}

class Dog extends Animal {
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
