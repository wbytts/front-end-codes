const R = require('ramda');

/*
both 接受两个函数，返回一个新函数：当两个传入函数都返回 truthy 值时，新函数返回 true，否则返回 false
either 接受两个函数，返回一个新函数：当两个传入函数任意一个返回 truthy 值时，新函数返回 true，否则返回 false

both 以函数的方式实现了逻辑与（&&）的功能，either 实现了逻辑或（||）的功能

Ramda 还提供了 allPass 和 anyPass，接受由任意多个函数组成的数组作为参数。
如名称所示，allPass类似于 both，而 anyPass 类似于 either。


and、or 和 not 用于处理数值
both、either 和 complement 用于处理函数
*/
