type TupleToUnion<T> = T extends (infer U)[] ? U : never

/*
## 注释
### 类型参数
  - `T`：泛型参数 `T` 表示一个元组类型或数组类型。

### 工具类型解释
#### 条件类型
  TypeScript 中的条件类型类似于 JavaScript 中的三元表达式 `condition ? trueExpression : falseExpression`。在这里，我们使用条件类型结合类型推断来实现元组到联合类型的转换。

#### 分解条件类型
  1. `T extends (infer U)[]`：
    - 条件类型用于检查 `T` 是否符合某个模式。
    - `(infer U)[]` 使用 `infer` 关键字来推断数组元素的类型，并将其赋值给类型变量 `U`。
    - 如果 `T` 是一个数组类型，例如 `[number, string, boolean]`，那么 `U` 将分别推断为 `number`、`string` 和 `boolean`。
  2. `? U : never`：
    - 如果条件为真（即 `T` 符合数组类型并成功推断出元素类型），则返回被推断的元素类型 `U`。
    - 否则返回 `never`，表示 `T` 不是一个有效的数组类型。
*/
