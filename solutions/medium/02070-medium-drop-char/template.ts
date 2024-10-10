type DropChar<S extends string, C extends string> = S extends `${infer Head}${infer Tail}`
  ? Head extends C
    ? DropChar<Tail, C>
    : `${Head}${DropChar<Tail, C>}`
  : S

/*
## 注释
  1. **实现步骤**
    - 我们需要递归地遍历字符串 `S`，检查每个字符是否等于 `C`。
    - 如果字符等于 `C`，则不包含它；否则，将其包含在最终结果中。
    - 使用 TypeScript 的条件类型和模板字面量类型来实现这一逻辑。

  2. **条件类型**
    - `S extends `${infer Head}${infer Tail}``: 检查字符串 `S` 是否可以拆分为一个字符 `Head` 和剩余部分 `Tail`。这相当于迭代地遍历字符串的每个字符。
    - `Head extends C`: 检查当前字符 `Head` 是否等于要移除的字符 `C`。
      - 如果是，则递归调用 `DropChar` 对 `Tail` 继续处理（即不包含当前字符 `Head`）。
      - 如果不是，将当前字符 `Head` 拼接到结果字符串，并递归调用 `DropChar` 对 `Tail` 继续处理。
    - 如果 `S` 为空字符串（即递归终止条件），则返回空字符串。
*/
