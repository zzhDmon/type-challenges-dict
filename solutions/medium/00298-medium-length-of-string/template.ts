type LengthOfString<S extends string, T extends any[] = []> = S extends `${infer First}${infer Rest}`
  ? LengthOfString<Rest, [First, ...T]>
  : T['length']

/*
## 注释
### 类型别名解释
  1. **使用模板字面量匹配字符串**：
    ```typescript
    S extends `${infer First}${infer Rest}`
    ```
    - 利用模板字面量类型将字符串 `S` 拆分为第一个字符 `First` 和剩余部分 `Rest`。
    - 如果字符串可以这样拆分，就继续进行递归操作。
  2. **递归处理剩余部分并记录长度**：
    ```typescript
    ? LengthOfString<Rest, [First, ...T]>
    ```
    - 调用 `LengthOfString` 进行递归处理 `Rest`（剩余部分），同时将 `First` 加入元组 `T` 中记录。
    - 通过 `[First, ...T]` 表示将当前字符 `First` 插入到元组 `T` 的前面，随着递归调用，元组 `T` 会逐渐增大，记录已处理的字符数量。
  3. **返回元组的长度**：
    ```typescript
    : T['length'];
    ```
    - 如果字符串无法拆分（即空字符串），则返回元组 `T` 的长度 `T['length']`，这代表字符串的长度。
  4. **初始情况下元组 `T` 默认值为空数组 `[]`**：
    - 初始情况下，元组 `T` 是一个空数组 `[]`，表示尚未处理任何字符。
*/
