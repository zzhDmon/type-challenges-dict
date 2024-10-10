type PercentageParser<A extends string> =
  A extends `${infer Sign}${infer Rest}`
    ? Sign extends '+' | '-'
      ? Rest extends `${infer Number}%`
        ? [Sign, Number, '%']
        : [Sign, Rest, '']
      : A extends `${infer Number}%`
        ? ['', Number, '%']
        : ['', A, '']
    : ['', '', '']

/*
## 注释
  1. **条件类型**
    - `A extends `${infer Sign}${infer Rest}`: 检查字符串 `A` 是否可以拆分成一个字符 `Sign` 和剩余部分 `Rest`。
    - `Sign extends '+' | '-'`: 检查 `Sign` 是否是 `+` 或 `-`。
      - 如果是，则继续检查 `Rest`。
      - `Rest extends `${infer Number}%`: 检查 `Rest` 是否以 `%` 结尾。
        - 如果是，则拆分 `Number` 和 `%`，返回 `[Sign, Number, '%']`。
        - 如果不是，则返回 `[Sign, Rest, '']`。
    - 如果 `Sign` 不是 `+` 或 `-`，则进一步检查整个字符串：
      - `A extends `${infer Number}%`: 检查 `A` 是否以 `%` 结尾。
        - 如果是，则拆分 `Number` 和 `%`，返回 `['', Number, '%']`。
        - 如果不是，则返回 `['', A, '']`。
    - 如果 `A` 是空字符串，则返回 `['', '', '']`。
*/
