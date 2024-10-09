type Permutation<T, K = T> = [T] extends [never]
  ? []
  : T extends T
    ? [T, ...Permutation<Exclude<K, T>>]
    : never

/*
## 注释
### 类型别名解释
  1. **处理边界情况**：
    ```typescript
    [T] extends [never]
      ? []
    ```
    - 如果 `T` 是 `never`，表示没有任何元素，可以返回空的元组 `[]`。
  2. **生成排列组合**：
    ```typescript
    : T extends T
      ? [T, ...Permutation<Exclude<K, T>>]
    ```
    - `T extends T` 是一种分布式条件类型，依次处理 `T` 联合类型中的每个元素。
    - 对于每个 `T` 中的元素，将其与剩下的元素进行组合：
      - `[T, ...Permutation<Exclude<K, T>>]`：
        - `Exclude<K, T>` 得到除当前元素 `T` 以外的其他元素。
        - `Permutation<Exclude<K, T>>` 递归地生成剩余元素的排列组合。
        - `[T, ...Permutation<Exclude<K, T>>]` 将当前元素 `T` 放在前面，并将剩余元素的排列组合接在后面。
  3. **防止无限递归的问题**：
    - 使用泛型默认参数 `K = T` 来保持原始类型，这样我们在递归过程中可以一直知道原始的完整类型。
*/
