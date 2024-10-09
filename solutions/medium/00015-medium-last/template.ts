type Last<T extends any[]> = T extends [...infer _, infer L] ? L : never

/*
## 注释
### 类型参数
  - `T extends any[]`：泛型参数 `T` 表示一个数组类型。`extends any[]` 约束 `T` 必须是一个数组。

### 工具类型解释
#### 条件类型
  TypeScript 中的条件类型类似于 JavaScript 中的三元表达式 `condition ? trueExpression : falseExpression`。这里我们使用条件类型来实现对数组类型的模式匹配和类型推断。

#### 变长元组类型推断
  `infer` 关键字用于在条件类型中引入类型变量，并进行类型推断。在这里，我们结合使用 `infer` 和变长元组。

### 分解条件类型
  1. **匹配变长元组模式**
    ```typescript
    T extends [...infer _, infer L]
    ```
    - 这一部分用于匹配变长元组，并尝试提取数组 `T` 的最后一个元素。
    - `...infer _`：通过 `infer` 关键字推断数组前面的所有元素，并把它们赋值给类型变量 `_`。下划线 `_` 表示一个占位符，表示我们不关心具体是什么类型。
    - `infer L`：通过 `infer` 关键字提取数组的最后一个元素类型，并将其赋值给类型变量 `L`。
  2. **条件结果**
    ```typescript
    ? L : never
    ```
    - 如果条件为真，即 `T` 符合变长元组模式，返回类型变量 `L`（即数组的最后一个元素）。
    - 如果条件为假，即 `T` 不符合变长元组模式，返回 `never`。
*/
