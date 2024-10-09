type IsEqual<T, U> =
  (<G>() => G extends T ? 1 : 2) extends
  (<G>() => G extends U ? 1 : 2)
    ? true
    : false

type Includes<Value extends readonly any[], Item> =
  Value extends [infer First, ...infer Rest]
    ? IsEqual<First, Item> extends true
      ? true
      : Includes<Rest, Item>
    : false

/*
## 注释-IsEqual
#### 工作原理
  `IsEqual` 类型别名用于判断两个类型 `T` 和 `U` 是否相等。它通过创建匿名函数类型并利用条件类型来实现这一点。
  1. `<G>() => G extends T ? 1 : 2`:
    - 这是一个泛型箭头函数，它接受一个泛型参数 `G`。
    - 如果 `G` 能够赋值给类型 `T`，则返回类型 `1`，否则返回类型 `2`。
  2. `<G>() => G extends U ? 1 : 2`:
    - 这是另一个泛型箭头函数，工作原理同上，但这里是检查 `G` 是否能够赋值给 `U`。
  3. 比较两个函数类型：
    - `(<G>() => G extends T ? 1 : 2) extends (<G>() => G extends U ? 1 : 2)`:
    - 如果这两个函数类型能够互相赋值，则说明 `T` 和 `U` 是相等的，返回 `true`。
    - 否则返回 `false`。

## 注释-Includes
#### 工作原理
  `Includes` 类型别名用于检查数组类型 `Value` 中是否包含某个类型 `Item`。它使用递归泛型和类型推断来实现这一点。
  1. `Value extends [infer First, ...infer Rest]`:
    - 这里使用了类型推断（`infer`）来将数组 `Value` 分解为首元素 `First` 和剩余元素 `Rest`。
    - 如果 `Value` 能被分解，则进入三元操作符，否则返回 `false`。
  2. `IsEqual<First, Item> extends true`
    - 使用前面定义的 `IsEqual` 类型来比较 `First` 和 `Item`。
    - 如果 `First` 和 `Item` 相等，则返回 `true`。
  3. `Includes<Rest, Item>`:
    - 如果 `First` 和 `Item` 不相等，则递归地检查剩余的元素 `Rest`。
*/
