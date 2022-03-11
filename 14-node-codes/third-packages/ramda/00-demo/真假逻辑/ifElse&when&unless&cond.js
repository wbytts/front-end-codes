const R = require('ramda');

// const forever21 = age => age >= 21 ? 21 : age + 1
// 第二个分支是 identity，可以用 when 代替 ifElse
// 如果第一个条件分支是 identity，可以用 unless
// cond 函数，来代替 switch 语句或链式的 if...then...else 语句

const forever21 = age => ifElse(lte(21), () => 21, inc)(age)

console.log(forever21(18))

const alwaysDrivingAge = age => when(lt(__, 16), always(16))(age)
// const alwaysDrivingAge = age => unless(gte(__, 16), always(16))(age)

const water = temperature => cond([
  [equals(0),   always('water freezes at 0°C')],
  [equals(100), always('water boils at 100°C')],
  [T,           temp => `nothing special happens at ${temp}°C`]
])(temperature);




