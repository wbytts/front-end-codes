const R = require('ramda');

/*
Currying（柯里化） 是函数式编程的另一个核心概念。
从技术角度讲，一个柯里化了的函数是一系列高阶一元函数，这也是我刚刚抱怨过的。
在纯函数式语言中，柯里化函数在调用时，语法上看起来和调用多个参数没有什么区别。

但由于 Ramda 是一个 JavaScript 库，而 JavaScript 并没有很好的语法来支持一系列一元函数的调用，
所以作者对传统柯里化的定义放宽了一些。

在 Ramda 中，一个柯里化的函数只能用其参数的子集来调用，它会返回一个接受其余参数的新函数。
当使用它的所有参数调用，真正的原函数将被调用。

柯里化的函数在下列两种情况下工作的都很好：
    1. 可以按正常情况下使用所有参数调用它，它可以像普通函数一样正常工作；
    2. 也可以使用部分参数来调用它，这时它会像使用 partial 一样工作。

注意，这种灵活性带来了一些性能上的损失，因为 curry 需要搞清楚函数的调用方式，然后确定该做什么。
一般来说，我只有需要在多个地方对同一个函数使用 partial 的时候，才会对函数进行柯里化。
*/

const publishedInYear = R.curry((year, book) => book.year === year)

const titlesForYear = (books, year) => {
  const selected = R.filter(publishedInYear(year), books)
  return R.map(book => book.title, selected)
}
