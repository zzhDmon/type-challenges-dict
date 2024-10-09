// type Length<T> = any
type Length<T extends readonly any[]> = T['length']

/*
## 注释
### 类型参数
  - `T extends readonly any[]`:
  - 这是一个泛型参数 `T`，表示它必须是一个只读数组类型。数组中的元素可以是任何类型（即 `any[]`）。

### 数组长度属性
  在 TypeScript 中，数组类型有一个预定义的属性 `length`，它代表数组的长度。我们可以通过类型系统访问这个属性来获取数组的长度类型。

#### 分解类型
  1. `T['length']`:
    - 这是在类型级别上访问数组 `T` 的 `length` 属性。
    - 对于任意数组类型 `T`，`T['length']` 的值是一个数字字面量类型，表示该数组的长度。
*/
