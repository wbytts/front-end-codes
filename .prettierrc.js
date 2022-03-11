module.exports = {
  // 打印宽度，默认80
  printWidth: 150,

  // tab键宽度，默认2
  tabWidth: 2,

  // 是否使用tab键缩进，默认false
  useTabs: false,

  // 是否要加分号，默认true
  semi: true,

  // 是否使用单引号，默认false
  singleQuote: true,

  // 当对象中的属性被引用时更改，默认 as-needed
  // "as-needed" - Only add quotes around object properties where required.
  // "consistent" - If at least one property in an object requires quotes, quote all properties.
  // "preserve" - Respect the input use of quotes in object properties.
  quoteProps: 'as-needed',

  // 在JSX中使用单引号而不是双引号，默认false
  jsxSingleQuote: false,

  // 当多行时，尽可能打印尾随逗号。(例如，单行数组的末尾永远不会有逗号。)，默认 es5，还有 all 和 none
  trailingComma: 'es5',

  // 打印对象字面量中括号之间的空格，默认 true
  bracketSpacing: true,

  // 将多行JSX元素的>放在最后一行的末尾，而不是单独放在下一行(这不适用于自闭元素)。默认false
  jsxBracketSameLine: false,

  // 在单独的箭头函数参数周围使用圆括号
  // always：总是使用括号
  // avoid：尽可能省略括号
  arrowParens: 'avoid',

  // 只格式化一部分，一般用不到这个
  // rangeStart: 0,
  // rangeEnd: Infinity,

  // 指定要使用哪个解析器，默认为 None
  // parser: '<string>',
  // parser: require("./my-parser")

  // 指定用于推断使用哪个解析器的文件名
  // filepath: '<string>',

  // Prettier可以限制自己只格式化那些在文件顶部包含特殊注释(称为pragma)的文件。
  // 当逐步将大型的未格式化代码库转换为更漂亮的代码库时，这是非常有用的。
  // 默认false
  requirePragma: false,

  // Prettier可以在文件顶部插入一个特殊的@format标记，指定该文件已经用Prettier进行了格式化。
  // 当与——require- pragma选项一起使用时，它可以很好地工作。
  // 如果在文件的顶部已经有一个docblock，那么这个选项将用@format标记给它添加一个换行符。
  // 默认 false
  insertPragma: false,

  // 默认情况下，Prettier会按原样包装标记下来的文本，因为有些服务使用了换行敏感的渲染器，例如GitHub comment和BitBucket。
  // 在某些情况下，您可能想要依赖编辑器/ 查看器软包装代替，因此该选项允许您选择“never”退出。
  // 默认 preserve
  proseWrap: 'preserve',

  // 指定HTML文件的全局空格敏感度
  // css|strict|ignore，默认css
  htmlWhitespaceSensitivity: 'css',

  // 是否在Vue文件中的<script>和<style>标签内缩进代码。
  // 有些人(比如Vue的创建者)不缩进以保存缩进级别，但这可能会破坏编辑器中的代码折叠。
  // 默认 false
  vueIndentScriptAndStyle: false,

  /*
    "lf" – Line Feed only (\n), common on Linux and macOS as well as inside git repos
    "crlf" - Carriage Return + Line Feed characters (\r\n), common on Windows
    "cr" - Carriage Return character only (\r), used very rarely
    "auto" - Maintain existing line endings (mixed values within one file are normalised by looking at what’s used after the first line)
   */
  // 默认 lf
  endOfLine: 'lf',

  /*
    "auto" – Format embedded code if Prettier can automatically identify it.
    "off" - Never automatically format embedded code.
  */
  // 默认 off
  embeddedLanguageFormatting: 'off',
};
