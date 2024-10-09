type ReplaceAll<S extends string, From extends string, To extends string> =
  From extends '' ? S :
    S extends `${infer Start}${From}${infer End}` ? `${Start}${To}${ReplaceAll<End, From, To>}` :
      S

/*
## 注释
### 类型别名解释
  1. **处理空字符串的情况**：
    ```typescript
    From extends '' ? S :
    ```
    如果 `From` 是空字符串，则直接返回原字符串 `S`，因为替换一个空字符串没有意义。
  2. **使用模板字面量匹配和条件类型进行模式匹配和替换**：
    ```typescript
    S extends `${infer Start}${From}${infer End}` ? `${Start}${To}${ReplaceAll<End, From, To>}` :
    ```
    - `S extends `${infer Start}${From}${infer End}``: 这部分用于匹配字符串 `S`。如果 `S` 可以分解成 `Start`、`From` 和 `End` 三部分，就进行替换。
      - `infer Start`: `From` 子字符串前面的部分。
      - `${From}`: 要被替换的子字符串。
      - `infer End`: `From` 子字符串后面的部分。
    - 如果匹配成功，将第一个匹配项替换为 `To`，然后递归地对剩余部分 `End` 继续进行替换操作：
      ```typescript
      `${Start}${To}${ReplaceAll<End, From, To>}`
      ```
  3. **如果没有匹配到 `From`**：
    ```typescript
    S;
    ```
    - 如果没有匹配到 `From`（即 `S` 不包含 `From`），则直接返回原字符串 `S`。
*/
