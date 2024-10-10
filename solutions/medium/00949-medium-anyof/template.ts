type Falsy = false | 0 | '' | [] | { [K in any]: never } | undefined | null
type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
  ? First extends Falsy
    ? AnyOf<Rest>
    : true
  : false

/*
## 注释
  1. **定义 Falsy 类型**
    ```typescript
    type Falsy = false | 0 | '' | [] | { [K in any]: never } | undefined | null;
    ```
    - `Falsy` 是一个联合类型，包含所有“falsy”值：`false`, `0`, 空字符串 `''`, 空数组 `[]`, 空对象 `{ [K in any]: never }`, `undefined` 和 `null`。
  2. **判断数组内容**
    ```typescript
    type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest]
      ? First extends Falsy
        ? AnyOf<Rest>
        : true
      : false;
    ```
    - `T extends [infer First, ...infer Rest]`：使用类型推断获取数组的第一个元素 `First` 和剩余部分 `Rest`。
    - `First extends Falsy`：如果 `First` 被认为是“falsy”值，则继续递归检查 `Rest`。
    - 否则，说明有至少一个“truthy”值，直接返回 `true`。
    - 如果数组已经为空（终止条件），直接返回 `false`。
*/
