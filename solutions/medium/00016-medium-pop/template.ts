// type Pop<T extends any[]> = any
type Pop<T extends any[]> = T extends [...infer R, infer L] ? R : []

/*
## 注释
### 类型参数
  - `T extends any[]`: 泛型参数 `T` 表示一个数组类型。约束 `T` 必须是一个数组。

### 工具类型解释
#### 条件类型
  TypeScript 中的条件类型类似于 JavaScript 中的三元表达式 `condition ? trueExpression : falseExpression`。这里我们使用条件类型来实现对数组类型的模式匹配和类型推断。

#### 变长元组类型推断
  `infer` 关键字用于在条件类型中引入类型变量，并进行类型推断。在这里，我们结合使用 `infer` 和变长元组。

### 分解条件类型
  1. **匹配变长元组模式**
      ```typescript
      T extends [...infer R, infer L]
      ```
      - 这一部分用于匹配变长元组，并尝试从数组 `T` 中提取出最后一个元素。
      - `...infer R`：通过 `infer` 关键字推断数组前面的所有元素，并将它们赋值给类型变量 `R`。
      - `infer L`：通过 `infer` 关键字提取数组的最后一个元素类型，并将其赋值给类型变量 `L`。
  2. **条件结果**
      ```typescript
      ? R : []
      ```
      - 如果条件为真，即 `T` 符合变长元组模式，返回类型变量 `R`（即数组去掉最后一个元素后的剩余部分）。
      - 如果条件为假，即 `T` 不符合变长元组模式，返回空数组类型 `[]`。
*/
