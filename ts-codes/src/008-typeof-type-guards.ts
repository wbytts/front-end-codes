export default 1

function printAll(strs: string | string[] | null) {
  // 注意：typeof null 的结果也是 object
  // 所以要判断strs不是null
  if (strs) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    } else {
      // ...
    }
  } else { // 为 null

  }

}

function multiplyAll(values: number[] | undefined, factor: number) {
  if (!values) {
    return values;
  } else {
    return values.map(x => x * factor)
  }
}

console.log(multiplyAll([3, 4], 2))



