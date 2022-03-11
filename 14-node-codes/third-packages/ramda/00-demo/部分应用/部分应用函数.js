const R = require('ramda');

/*
Ramda 提供了两个函数：partial 和 partialRight，来帮我们解决这个问题。

这两个函数可以让我们不必一次传递所有需要的参数，也可以调用函数。
它们都返回一个接受剩余参数的新函数，当所有参数都传入后，才会真正调用被包裹的原函数。

partial 和 partialRight 的区别在于参数传递的顺序：
  partial 先传递原函数左侧的参数，而 partialRight 先传递右侧的参数。

注意，为被 partial 和 partialRight 包裹的函数提供的参数必须包裹在数组中，即使只有一个参数。
*/


const publishedInYear = (book, year) => book.year === year

const titlesForYear = (books, year) => {
  const selected = R.filter(R.partialRight(publishedInYear, [year]), books)

  return R.map(book => book.title, selected)
}
