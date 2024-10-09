type Replace<S extends string, From extends string, To extends string> =
  From extends '' ? S :
    S extends `${infer Start}${From}${infer End}` ? `${Start}${To}${End}` :
      S

/*
## 注释
### 类型别名解释
  1. **处理空字符串的情况**：
    ```typescript
    From extends '' ? S :
    ```
    如果 `From` 是空字符串，则直接返回 `S` 原字符串，因为替换一个空字符串没有意义。
  2. **使用模板字面量匹配和条件类型进行模式匹配和替换**：
    ```typescript
    S extends `${infer Start}${From}${infer End}` ? `${Start}${To}${End}` :
    ```
    - `S extends `${infer Start}${From}${infer End}``: 这部分用于匹配字符串 `S`。如果 `S` 可以分解成 `Start`、`From` 和 `End` 三部分，就进行替换。
      - `infer Start`: 这是 `From` 前面的部分。
      - `${From}`: 这是要被替换的子字符串。
      - `infer End`: 这是 `From` 后面的部分。
    - 如果匹配成功，结果是 `\`${Start}${To}${End}\``。这表示用 `To` 替换 `From`，并拼接 `Start` 和 `End`。
  3. **如果没有匹配到 `From`**：
    ```typescript
    S;
    ```
    - 如果没有匹配到 `From`（即 `S` 不包含 `From`），则直接返回原字符串 `S`。
*/
