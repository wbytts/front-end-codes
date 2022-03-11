// Node.js 具有内置的模块系统。
// Node.js 文件可以导入其他 Node.js 文件公开的功能。

// 当想要导入某些东西时，使用
// const library = require("./library");

// 可以导入存在于当前文件夹中的 library.js 文件中公开的功能。
// 在此文件中，必须先公开功能，然后其他文件才能将其导入。
// 默认情况下，文件中定义的任何其他对象或变量都是私有的，不会公开给外界。

// 当将对象或函数赋值为新的 exports 属性时，这就是要被公开的内容，因此，可以将其导入应用程序的其他部分或其他应用程序中。

// 第一种方式是将对象赋值给 module.exports（这是模块系统提供的对象），这会使文件只导出该对象
const car = {
  brand: "Ford",
  model: "Fiesta",
};

module.exports = car;
// 在另一个文件中：const car = require('./car')


// 第二种方式是将要导出的对象添加为 exports 的属性。这种方式可以导出多个对象、函数或数据
// exports.car = car;
// 在另一个文件中：
// const items = require('./items')
// items.car

/*
module.exports 和 export.xxx 之间有什么区别？
    * module.exports 公开了它指向的对象
    * export.xxx 公开了它指向的对象的属性
    * exports 和 module.exports 指向同一个对象
    * 不能使用 exports = {} 写法，因为这样两者指向的对象就不痛了
*/

/**
 * 模块仅在模块第一次被使用时执行
 * 通过命令行参数传递个node程序的模块被称为主模块，主模块负责调度组成整个程序的其他模块完成工作
 * Node中，每一个模块都有一个module对下你给，module对象中有一个exports属性，我们需要公开的方法或者属性挂载到这个属性的对象的属性中
 * Node会在每个模块的最后，将exports的属性放出来
 * exports 单独使用的时候，只能添加导出属性，不能指定整个导出对象，即可以 exports.xxx=yyy，但是不能 exports=obj
 */
