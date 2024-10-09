type AppendArgument<Fn, A> = Fn extends (...args: infer Args) => infer ReturnType
  ? (...args: [...Args, A]) => ReturnType
  : never

/*
## 注释
### 类型别名解释
  1. **检查 `Fn` 是否为函数类型**：
    ```typescript
    Fn extends (...args: infer Args) => infer ReturnType
    ```
    - 使用条件类型检查 `Fn` 是否是一个函数类型。
    - `(...args: infer Args) => infer ReturnType` 是模式匹配的一部分：
      - `infer Args`: 用于推断 `Fn` 的参数类型列表，并将其赋值给类型变量 `Args`。
      - `infer ReturnType`: 用于推断 `Fn` 的返回类型，并将其赋值给类型变量 `ReturnType`。
  2. **构造新的函数类型**：
    ```typescript
    ? (...args: [...Args, A]) => ReturnType
    ```
    - 如果 `Fn` 是一个函数类型，将新参数类型 `A` 添加到原参数类型 `Args` 的末尾，形成新的参数类型 `[..., A]`。
    - 返回新的函数类型 `(...args: [...Args, A]) => ReturnType`。
    - 否则，返回 `never`。
*/
