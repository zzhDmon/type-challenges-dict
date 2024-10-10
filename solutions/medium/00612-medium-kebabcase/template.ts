type KebabCase<S, IsFirst = true> = S extends `${infer First}${infer Rest}`
  ? First extends Lowercase<First>
    ? `${First}${KebabCase<Rest, false>}`
    : `${IsFirst extends true ? '' : '-'}${Lowercase<First>}${KebabCase<Rest, false>}`
  : S
/*
## 注释
  1. **KebabCase 类型**
    ```typescript
    type KebabCase<S, IsFirst = true> = S extends `${infer First}${infer Rest}`
      ? First extends Lowercase<First>
        ? `${First}${KebabCase<Rest, false>}`
        : `${IsFirst extends true ? '' : '-'}${Lowercase<First>}${KebabCase<Rest, false>}`
      : S;
    ```
    - 使用 `IsFirst` 参数来标记当前字符是否为第一个字符，默认为 `true`。
    - 如果 `First` 是小写字母，则直接保留并递归处理 `Rest`，标记 `IsFirst` 为 `false`。
    - 如果 `First` 是大写字母：
      - 并且当前字符是第一个字符（即 `IsFirst extends true`），则不添加连字符。
      - 否则，在其前面添加连字符 `-` 并将其转换为小写，然后递归处理 `Rest`，标记 `IsFirst` 为 `false`。
*/
