art-template 是一个简约、超快的模板引擎。

它采用作用域预声明的技术来优化模板渲染速度，从而获得接近 JavaScript 极限的运行性能，并且同时支持 NodeJS 和浏览器。

# 特性

- 拥有接近 JavaScript 渲染极限的的性能
- 调试友好：语法、运行时错误日志精确到模板所在行；支持在模板文件上打断点（Webpack Loader）
- 支持 Express、Koa、Webpack
- 支持模板继承与子模板
- 浏览器版本仅 6KB 大小

# 模板

art-template 有两种模板语法：
- 标准语法可以让模板更容易读写
- 原始语法具有强大的逻辑处理能力


## 标准语法

```html
{{if user}}
  <h2>{{user.name}}</h2>
{{/if}}
```

## 原始语法

> 原始语法兼容 EJS、Underscore、LoDash 模板等语法

```html
<% if (user) { %>
  <h2><%= user.name %></h2>
<% } %>
```

# 渲染模板

```js
var template = require('art-template');
var html = template(__dirname + '/tpl-user.art', {
    user: {
        name: 'aui'
    }
});
```

# 核心方法

```js
// 基于模板名渲染模板
template(filename, data);

// 将模板源代码编译成函数
template.compile(source, options);

// 将模板源代码编译成函数并立刻执行
template.render(source, data, options);
```

# 安装

```
npm install art-template --save
```

在浏览器中实时编译需要：`template-web.js`

IE8需要补丁才能运行

> 浏览器与node中使用的差异：
> 因为浏览器不支持文件系统，所以 template(filename, data) 不支持传入文件路径，它内部使用 document.getElementById(filename).innerHTML 来获取模板

```html
<script src="lib/template-web.js"></script>
<script id="tpl-user" type="text/html">
    {{if user}}
    <h2>{{user.name}}</h2>
    {{/if}}
</script>
```

同时
- webpack 具有一个 art-template-loader
- express：express-art-template
- koa：koa-art-template

# 语法

标准语法支持基本模板语法以及基本 JavaScript 表达式；
原始语法支持任意 JavaScript 语句，这和 EJS 一样。

## 输出

标准语法：
```ejs
{{value}}
{{data.key}}
{{data['key']}}
{{a ? b : c}}
{{a || b}}
{{a + b}}
```

原始语法：
```
<%= value %>
<%= data.key %>
<%= data['key'] %>
<%= a ? b : c %>
<%= a || b %>
<%= a + b %>
```

模板一级特殊变量可以使用 $data 加下标的方式访问：
```
{{$data['user list']}}
```

# 原文输出

标准语法：
```
{{@ value }}
```


原始语法：
```
<%- value %>
```

> 原文输出语句不会对 HTML 内容进行转义处理，可能存在安全风险，请谨慎使用。

# 条件

标准语法
```
{{if value}} ... {{/if}}
{{if v1}} ... {{else if v2}} ... {{/if}}
```

原始语法：
```
<% if (value) { %> ... <% } %>
<% if (v1) { %> ... <% } else if (v2) { %> ... <% } %>
```

# 循环

标准语法：
```
{{each target}}
    {{$index}} {{$value}}
{{/each}}
```

原始语法：
```
<% for(var i = 0; i < target.length; i++){ %>
    <%= i %> <%= target[i] %>
<% } %>
```

- `target` 支持 `array` 与 `object` 的迭代，其默认值为 `$data`。
- `$value` 与 `$index` 可以自定义：`{{each target val key}}`。
