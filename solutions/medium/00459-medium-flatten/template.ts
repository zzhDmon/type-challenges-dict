type Flatten<T extends any[]> = T extends []
  ? []
  : T extends [infer First, ...infer Rest]
    ? First extends any[]
      ? [...Flatten<First>, ...Flatten<Rest>]
      : [First, ...Flatten<Rest>]
    : never

/*
## 注释
### 类型别名解释
  1. **使用类型约束**：
    ```typescript
    type Flatten<T extends any[]> = ...
    ```
    - 通过 `T extends any[]` 确保输入类型 `T` 必须是一个数组类型，如果输入类型不是数组，将导致类型错误。
  2. **处理空数组的情况**：
    ```typescript
    T extends []
      ? []
    ```
    - 如果 `T` 是空数组 `[]`，返回空数组 `[]`。
  3. **递归处理数组的第一项和剩余部分**：
    ```typescript
    : T extends [infer First, ...infer Rest]
      ? First extends any[]
        ? [...Flatten<First>, ...Flatten<Rest>]
        : [First, ...Flatten<Rest>]
    ```
    - 如果 `T` 是一个非空数组，使用 `infer` 提取数组的第一项 `First` 和剩余部分 `Rest`。
    - 检查 `First` 是否是数组：
      - 如果 `First` 是数组，递归地展开 `First` 并将结果与递归展开的 `Rest` 拼接起来。
      - 如果 `First` 不是数组，将 `First` 作为单独的元素，并递归展开 `Rest`。
  4. **处理没有匹配到元组形式的数组情况**：
    ```typescript
    : never
    ```
    - 这个分支用于处理所有可能未匹配到的情况，如果 `T` 不符合任何上面的条件，则返回 `never`。
*/
