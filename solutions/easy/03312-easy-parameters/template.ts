type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

/*
## 注释
### 类型参数
  - `T extends (...args: any[]) => any`:
  - 这是泛型参数 `T`，必须是一个函数类型。
  - `(...args: any[]) => any` 表示该类型必须是一个接受任意数量和类型参数并返回任意类型值的函数。

### 条件类型和类型推断
  TypeScript 中的条件类型类似于 JavaScript 中的三元表达式 `condition ? trueExpression : falseExpression`。在这里，我们结合使用条件类型和类型推断来提取函数的参数类型。

#### 分解条件类型
  1. `T extends (...args: infer P) => any`:
    - 条件类型用于检查 `T` 是否符合提供的模式。
    - `(...args: infer P)` 使用 `infer` 关键字来推断函数参数列表的类型，并将其赋值给类型变量 `P`。
    - 如果 `T` 符合这个模式，那么 `P` 将包含 `T` 的参数列表类型。
  2. `? P : never`:
    - 如果条件为真（即 `T` 符合函数类型并成功推断出参数类型），则返回被推断的参数类型 `P`。
    - 否则返回 `never`，表示 `T` 不是一个有效的函数类型。
*/
