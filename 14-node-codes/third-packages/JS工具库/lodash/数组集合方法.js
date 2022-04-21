/*
过滤：
    _.compact(array)：创建一个新数组，去除假值
    _.difference(array, [values])：创建一个新数组，元素在第一个参数中，但不在后面的所有数组的元素中
    _.differenceBy(array, [values], [iteratee=_.identity])
    _.differenceWith(array, [values], [comparator])
    _.drop(array, [n=1])：创建一个切片数组，去除前面的n个元素
    _.dropRight(array, [n=1])：创建一个切片数组，去除尾部的n个元素
    _.dropRightWhile(array, [predicate=_.identity])
    _.dropWhile(array, [predicate=_.identity])
    _.pull(array, [values])：移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较。（会改变数组）
    _.pullAll(array, values)
    _.pullAllBy(array, values, [iteratee=_.identity])
    _.pullAllWith(array, values, [comparator])
    _.pullAt(array, [indexes])
    _.remove(array, [predicate=_.identity])
    _.without(array, [values])
    _.xor([arrays])
    _.xorBy([arrays], [iteratee=_.identity])
    _.xorWith([arrays], [comparator])
    剔除---交集：
      _.intersection([arrays])：创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用SameValueZero进行相等性比较。（交集）
      _.intersectionBy([arrays], [iteratee=_.identity])
      _.intersectionWith([arrays], [comparator])
    剔除---去重：
      _.uniq(array)：创建一个去重后的array数组副本。使用了SameValueZero 做等值比较。只有第一次出现的元素才会被保留
      _.uniqBy(array, [iteratee=_.identity])
      _.uniqWith(array, [comparator])


合并：
    _.union([arrays])
    _.unionBy([arrays], [iteratee=_.identity])
    _.unionWith([arrays], [comparator])


填充：
    _.fill(array, value, [start=0], [end=array.length])


拆分：
    _.chunk(array, [size=1])：按大小拆分，并组成一个新数组


连接：
    _.concat(array, [values])：创建一个新数组，与其他值连接
    _.join(array, [separator=','])：将 array 中的所有元素转换为由 separator 分隔的字符串


查找：
    _.findIndex(array, [predicate=_.identity], [fromIndex=0])
    _.findLastIndex(array, [predicate=_.identity], [fromIndex=array.length-1])
    _.indexOf(array, value, [fromIndex=0])
    _.lastIndexOf(array, value, [fromIndex=array.length-1])
    _.sortedIndex(array, value)：使用二进制的方式检索来决定 value值 应该插入到数组中 尽可能小的索引位置，以保证array的排序。
    _.sortedIndexBy(array, value, [iteratee=_.identity])
    _.sortedIndexOf(array, value)
    _.sortedLastIndex(array, value)
    _.sortedLastIndexBy(array, value, [iteratee=_.identity])
    _.sortedLastIndexOf(array, value)
    _.sortedUniq(array)
    _.sortedUniqBy(array, [iteratee])


取值：
    _.head(array)、_.first(array)：获取数组 array 的第一个元素
    _.initial(array)：获取数组array中除了最后一个元素之外的所有元素
    _.last(array)：获的最后一个取array中元素
    _.tail(array)：获取除了array数组第一个元素以外的全部元素
    _.nth(array, [n=0])：获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素
    _.slice(array, [start=0], [end=array.length])：裁剪，从 start 位置开始到end结束，但不包括 end 本身的位置
    _.take(array, [n=1])：创建一个数组切片，从array数组的起始元素开始提取n个元素
    _.takeRight(array, [n=1])：创建一个数组切片，从array数组的最后一个元素开始提取n个元素
    _.takeRightWhile(array, [predicate=_.identity])
    _.takeWhile(array, [predicate=_.identity])


展平：
    _.flatten(array)：减少一级array嵌套深度
    _.flattenDeep(array)：将array递归为一维数组
    _.flattenDepth(array, [depth=1])：根据 depth 递归减少 array 的嵌套层级


打包、解包：
    _.zip([arrays])
    _.zipObject([props=[]], [values=[]])
    _.zipObjectDeep([props=[]], [values=[]])
    _.zipWith([arrays], [iteratee=_.identity])
    _.unzip(array)
    _.unzipWith(array, [iteratee=_.identity])

其他：
    _.fromPairs(pairs)：返回一个由键值对pairs构成的对象
    _.reverse(array)：翻转数组（改变原数组）

*/
