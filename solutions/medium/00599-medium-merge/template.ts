type Merge<F, S> = {
  [K in keyof F | keyof S]: K extends keyof S ? S[K] : F[K];
}

/*
## 注释
  1. **定义映射类型**
    ```typescript
    type Merge<F, S> = {
      [K in keyof F | keyof S]: K extends keyof S ? S[K] : F[K];
    };
    ```
    - 定义一个映射类型遍历键名 `K`。
    - 键名 `K` 的范围是 `keyof F | keyof S`，即两个对象类型 `F` 和 `S` 的所有键名的联合类型。

  2. **条件类型选择值类型**
    ```typescript
    K extends keyof S ? S[K] : F[K];
    ```
    - 使用条件类型判断 `K` 是否在 `S` 中。
    - 如果 `K` 存在于 `S` 中，则类型为 `S[K]`，即第二个对象类型中的值。
    - 如果 `K` 不存在于 `S` 中，则类型为 `F[K]`，即第一个对象类型中的值。

  这种方式确保了如果两个对象都包含相同的键名，新对象类型会采用第二个对象类型中的值。
*/
