export default 1;

type PersonType = {
  name: string;
  age: number;
}

let p1: PersonType = {
  name: '张三',
  age: 18
}

/*
接口也可以用来当做类型声明使用

接口可以重复声明（类型声明不行），最后起作用的是所有接口属性的汇集
接口可以在定义类的时候限制类的结构
接口中所有属性都没有实际的值，接口只定义对象的接口，而不考虑实际的值
接口中所有的方法都是抽象方法
*/
interface PersonInterface {
  name: string;
  age: number;
}

let p2: PersonInterface = {
  name: '张三',
  age: 18
}

class Person implements PersonInterface {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
  }
}


