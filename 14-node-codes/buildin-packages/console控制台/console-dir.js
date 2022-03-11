// console.dir
// 在 obj 上使用 util.inspect() 并将结果字符串打印到 stdout
// 此函数绕过在 obj 上定义的任何自定义 inspect() 函数

/*
  选项:
    showHidden: 如果为 true，则对象的不可枚举和符号属性也将显示。 默认值: false。
    depth: 告诉 util.inspect() 在格式化对象时递归多少次。 这对于检查大型复杂对象很有用。 要使其无限递归，则传入 null。 默认值: 2。
    colors: 如果为 true，则输出将使用 ANSI 颜色代码进行样式设置。 颜色可自定义；请参阅自定义 util.inspect() 颜色。 默认值: false。
 */
