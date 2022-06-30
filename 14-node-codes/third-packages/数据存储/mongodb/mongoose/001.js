const mongoose = require('mongoose');

// 默认端口 27017
mongoose.connect('mongodb://localhost/demo001');

const Cat = mongoose.model('Cat', {name: String});

const blogSchema = new Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  body: String,
  comments: [{body: String, date: Date}],
  date: {type: Date, default: Date.now},
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  }
});

const Blog = mongoose.model('Blog', blogSchema);

const kitty = new Cat({name: 'Zildjian'});
kitty.save().then(() => console.log('meow'));



