// !如果一个ts文件不带有import或者export，那么它内部的东西是全局可见的
export default 1;

// !在声明变量时可以给变量指定类型（参数等也可以）
let a: number = 1;

// !指定类型之后，变量赋值时，就会进行类型检查，如果不符合类型，就会报错
a = 3;
// a = '123'; // 会报错

console.log(a);

function sum(a: number, b: number): number {
  return a + b;
}

// !布尔值 boolean
let isDone: boolean = false;

// !数字类型 number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// !字符串类型 string
let name: string = "bob";
name = "smith";


// !数组类型 类型[]
let list1: number[] = [1, 2, 3];
// 数组类型 Array<类型>
let list2: Array<number> = [1, 2, 3];

// !元组类型 tuple
// [类型1, 类型2, ...]
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error


// !联合类型
// 函数如果没设置返回类型，并且可能返回多个类型，则会被认为是联合类型
let c: boolean | string | number;
let cc: string | number;
c = true;
c = '123';
c = 4;

let jiao: { name: string } & { age: number }

// !枚举类型
enum Color { Red = 1, Green, Blue };
let c1: Color = Color.Green;
let colorName: string = Color[2];
enum Sex { Male = 1, Female = 0 };


// !任意类型 any
// 一个变量设置类型为any之后，相当于对该变量关闭了类型检测
// any可以赋值给别人，这样子别人也会变成any

// !没有任何类型 void
// 如果函数返回值声明为void，则返回值只能是undefined或者null类型

// !null 和 undefined
let u: undefined = undefined;
let n: null = null;

// !没有值 never
// never类型表示的是那些永不存在的值的类型
// never类型是任何类型的子类型，也可以赋值给任何类型；
// 然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。
// 即使 any也不可以赋值给never。
// never作为函数返回类型，表示不会返回的函数（连undefined都不返回），有时候用来处理会报错的函数

// !对象类型 object
// object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

// ! 限制对象结构
// {属性名: 属性类型, ...}
// {属性名?: 属性类型}  可选的属性
// {[属性名: 属性名类型]: 属性值类型}
// {[propName: string]: any} 属性可以是任意的类型
// 声明的时候，属性个数不能多，也不能少
// 如果属性是可选的，可以在属性名后面加一个 ?
let x1: { name: string, age: number };
x1 = { name: '张三', age: 18 };

// ! 限制函数结构
// let d: (参数表) => 返回类型
// let d: (a: number, b: number) => number;
let d: (a: number, b: number) => number;


// !unknown
// 表示不知道是什么类型
// 这个不能赋值给不同的类型（与any不同）
// 实际上就是一个类型安全的any
// 如果unknown要赋值给其他变量，需要判断其类型，或者使用类型断言
let u1: unknown;
u1 = '324';
let s: string;
// 变量 as 类型
// <类型>变量
// 告诉解析器变量的实际类型
s = u1 as string;
s = <string>u1;


function concat(a: string | number, b: string | number) {

}


