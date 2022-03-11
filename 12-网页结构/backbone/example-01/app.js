var Note = Backbone.Model.extend({
  // 可以添加一些默认属性
  defaults: {
    title: '笔记的标题',
    create_time: new Date(),
    content: '',
  },
  // 创建时，会调用 initialize 方法
  initialize: function () {
    console.log('调用了 initialize 方法');

    // 使用 set 方法的时候，如果值发生了变化，就会触发 change 事件
    // 监听 change 事件
    this.on('change', function (model, options) {
      console.log('发生了 change 事件');
    });
    // 监听 title 属性的 change 事件
    this.on('change:title', function (model, options) {
      console.log('title 属性发生了变化 （change:title)');
    });
    // 监听 invalid 事件（validate失败 )
    this.on('invalid', function (model, error) {
      console.log('invalid: ', error);
    });
  },

  // 验证 --- validate
  // app.set('title', '1', {validate: true})
  // 如果验证失败，会产生 invalid 事件
  validate: function (attributes, options) {
    if (attributes.title.length < 3) {
      // 返回的就是错误的信息
      return '标题字数不能少于3';
    }
  },
});

var note1 = new Note();
console.log('note1', note1);
var note2 = new Note({
  title: '西红柿炒鸡蛋的做法',
  created_at: new Date(),
});
console.log('note2', note2);
// 得到一个对象的属性
console.log(note2.attributes);
console.log(note2.toJSON());
// 判断对象里时候有某个属性
console.log(note2.has('title'));
// 获取某个属性
console.log(note2.get('title'));
// 删除某个属性
note2.unset('title');
console.log('删除title后是否存在title属性：', note2.has('title'));
// 设置一个属性
note2.set('title', '紫菜蛋汤的做法');
console.log(note2.get('title'));
// 清空对象的属性
note2.clear();

// 测试 validate 功能
var note3 = new Note();
note3.set('title', '1', {
  validate: true,
});

var NoteView = Backbone.View.extend({
  tagName: 'li', // 标签名
  className: 'item', // class 02-属性
  attributes: {
    // 其他属性
    'date-role': 'list',
  },
  template: _.template($('#template-list').html()),
  render: function () {
    // 渲染
    this.$el.html(this.template(this.model.attributes));
  },
});

var NoteCollection = Backbone.Collection.extend({
  model: Note, // 设置集合中模型是什么类别
});

var note = new Note({
  title: '西红柿炒鸡蛋的做法',
});
var noteView = new NoteView({
  model: note,
});

noteView.render();
console.log(noteView.el);

var n1 = new Note({
  id: 1,
  title: 't1',
});
var n2 = new Note({
  id: 2,
  title: 't2',
});
var n3 = new Note({
  id: 3,
  title: 't3',
});

var nc = new NoteCollection([n1, n2]);
console.log('nc', nc);
// 添加， add也可以添加多个，传一个数组参数即可
// 如果要添加的模型已经在Collection中存在了，则会跳过去
// 如果添加时使用了选项 merge:true，则已有的模型会合并  nc.add(xxx, {merge:true});
nc.add(n3);
console.log('nc', nc);
// 从集合中删除模型
nc.remove();

// 清空集合中的模型
nc.reset();
// nc.reset([....]) // 也可以用新的数组中的模型替换已有的模型

$(function () {
  $('body').append($('<ul></ul>').append(noteView.el));
});
