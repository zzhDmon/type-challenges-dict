type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}`
  ? First | StringToUnion<Rest>
  : never
/*
## 注释
  1. **条件类型和模板字面量类型**
    ```typescript
    type StringToUnion<T extends string> = T extends `${infer First}${infer Rest}`
      ? First | StringToUnion<Rest>
      : never;
    ```
    - `T extends ${infer First}${infer Rest}`：使用模板字面量类型，匹配字符串 `T` 的第一个字符和剩余字符。
      - `First`：表示字符串的第一个字符。
      - `Rest`：表示字符串剩余的部分。
    - 条件类型 `?`：
      - 如果 `T` 可以被分解为 `First` 和 `Rest`，则返回 `First` 与递归调用 `StringToUnion<Rest>` 结果的联合类型。
      - 否则，对于空字符串，返回 `never`。
  2. **递归处理**
    - 对于非空字符串，通过递归调用 `StringToUnion` 继续处理剩余的字符串部分，直到字符串为空。
    - 每次递归调用，将第一个字符添加到最终的联合类型中。
*/
