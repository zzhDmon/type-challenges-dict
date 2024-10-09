type If<C, T, F> = C extends true ? T : F

/*
## 注释
### 类型参数
  - `C`: 条件类型，用于判断是否为 `true`。
  - `T`: 如果 `C` 为 `true` 时返回的类型。
  - `F`: 如果 `C` 为 `false` 时返回的类型
  。
### 条件类型
  TypeScript 中的条件类型类似于 JavaScript 中的三元表达式 `condition ? trueExpression : falseExpression`，它在类型层次上进行条件判断和选择。

#### 分解条件类型
  1. `C extends true`:
    - `extends` 用于检查类型兼容性。在这里，它用于检查 `C` 是否可以赋值给 `true`。
    - 也就是说，判断 `C` 是否为 `true`，如果是，那么条件就为真。
  2. `? T`:
    - 如果 `C` 为 `true`，那么返回类型 `T`。
  3. `: F`:
    - 如果 `C` 为 `false`，那么返回类型 `F`。
*/
