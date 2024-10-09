type MyCapitalize<S extends string> = S extends `${infer F}${infer R}` ? `${Uppercase<F>}${R}` : S

/*
## 注释
### 类型参数
  - `S extends string`: 泛型参数 `S` 表示一个字符串类型。约束 `S` 必须是一个字符串。

### 工具类型解释
#### 条件类型
  TypeScript 中的条件类型类似于 JavaScript 中的三元表达式 `condition ? trueExpression : falseExpression`。这里我们使用条件类型来实现对字符串类型的模式匹配和类型操作。

#### 模板字面量类型和类型推断
  模板字面量类型允许我们在类型层面上进行字符串拼接和模式匹配。`infer` 关键字用于在条件类型中引入类型变量，并进行类型推断。

### 分解条件类型
  1. **匹配模板字面量模式**
    ```typescript
    S extends `${infer F}${infer R}`
    ```
    - 这一部分用于匹配字符串类型 `S`，并尝试将其分解为首字符 `F` 和剩余字符 `R`。
    - `${infer F}${infer R}` 利用模板字面量类型进行模式匹配：
      - `infer F`：通过 `infer` 关键字推断字符串的第一个字符，并将其赋值给类型变量 `F`。
      - `${infer R}`：通过 `infer` 关键字推断字符串的剩余部分，并将其赋值给类型变量 `R`。
  2. **条件结果**
    ```typescript
    ? `${Uppercase<F>}${R}` : S
    ```
    - 如果条件为真，即字符串 `S` 匹配模板字面量模式，将首字符 `F` 转换为大写，返回大写后的首字符与剩余字符拼接的字符串类型。
      - `Uppercase<F>`：TypeScript 提供的内置工具类型 `Uppercase`，用于将某个字符转换为大写。
      - `${Uppercase<F>}${R}`：将大写后的首字符 `F` 和剩余字符 `R` 拼接成新的字符串类型。
    - 如果条件为假，即字符串 `S` 不匹配模板字面量模式（通常是空字符串的情况），返回原字符串 `S`。
*/
