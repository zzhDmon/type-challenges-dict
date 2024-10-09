// answer1
type First<T extends any[]> = T extends [] ? never : T[0]

// answer2
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]

// answer3
// type First<T extends any[]> = T extends [infer A, ...infer rest] ? A : never

/*
## 注释-answer1
### 类型参数
  - `T extends any[]`:
  - 这是一个泛型参数 `T`，它必须是一个数组类型。数组中的元素可以是任何类型（即 `any[]`）。

### 条件类型
  TypeScript 中的条件类型类似于 JavaScript 中的三元表达式 `condition ? trueExpression : falseExpression`，它在类型层次上进行条件判断和选择。

#### 分解条件类型
  1. `T extends []`:
    - 这里的 `extends` 用于检查类型兼容性。
    - `T extends []` 用于判断 `T` 是否为一个空数组类型，即没有任何元素的数组。
  2. `? never`:
    - 如果 `T` 确实是一个空数组类型，那么返回 `never` 类型。
    - `never` 类型表示的是那些永不存在的值。在这里，它被用来表示空数组没有第一个元素。
  3. `: T[0]`:
    - 如果 `T` 不是一个空数组类型，则返回 `T[0]`，即数组 `T` 的第一个元素的类型。
*/
