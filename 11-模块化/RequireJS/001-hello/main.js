console.log("RequireJS加载成功！");

/*
require.js采用 AMD模块规范

require(['moduleA', 'moduleB', 'moduleC'], function (moduleA, moduleB, moduleC){});
第一个参数是一个数组，表示所依赖的模块
第二个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用

加载的模块会以参数形式传入该函数，从而在回调函数内部就可以使用这些模块
require()异步加载，浏览器不会丢失响应，指定的回调函数只有前面的模块都加载成功后才会运行，解决了依赖性的问题

加载非规范模块：需要先用 require.config() 方法，定义它们的一些特征

*/

require.config({
  // baseUrl: "/",
  paths: { // 指定各个模块的加载路径
    // 注意：这里要省掉 js 文件的后缀名
    "jquery": ["https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery"]
  },
  shim: { // 用来配置不兼容的模块
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    "underscore": {
      exports: "_"
    },
    "jquery.form": {
      deps: ["jquery"]
    }
  }
});

require(['jquery'], function ($) {
  console.log($);
});
