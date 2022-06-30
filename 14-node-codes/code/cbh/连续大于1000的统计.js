

let arr = [1000, 2000, 2100, 0, 0, 0, 0, 1000, 2200, 2134, 2211, 2222];

let oneList = arr.map(x => x > 1000 ? 1 : 0).join('').split(/0+/)
let last = oneList[oneList.length - 1];

console.log(last)
console.log(last.length)


