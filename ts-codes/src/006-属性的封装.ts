export default 1;

class Person {

  // 在属性前面添加属性修饰符

  // public 表示公共的，可以在任意位置修改
  public name: string;

  // private 表示私有的，不允许外部修改
  private age: number;

  // protected 表示受保护的属性，只能在自己类里和继承的类里使用
  protected sex: string;

  constructor(name: string, age: number, sex: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

class Person1 {
  // 直接将属性在构造函数中声明
  // 构造和初始化同时进行
  constructor(public name: string, public age: number) {}
}
