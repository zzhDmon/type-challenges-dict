type Diff<O, O1> = {
  [K in Exclude<keyof O | keyof O1, keyof O & keyof O1>]: (K extends keyof O ? O[K] : never) | (K extends keyof O1 ? O1[K] : never);
}

/*
## 注释
  1. **获取所有属性**：
    - 使用 `keyof O | keyof O1` 获取两个对象的所有属性键。
  2. **排除公共属性**：
    - 使用 `Exclude<keyof O | keyof O1, keyof O & keyof O1>` 来排除两个对象中都存在的属性键。`keyof O & keyof O1` 表示两个对象共有的属性，`Exclude` 用于从联合类型中移除这些公共属性。
  3. **构建差异对象**：
    - 使用映射类型 `[K in ...]` 遍历差异属性键。
    - 值的类型为 `(K extends keyof O ? O[K] : never) | (K extends keyof O1 ? O1[K] : never)`：如果键 `K` 是 `O` 的属性，则使用 `O[K]`，否则使用 `never`。同样地，如果键 `K` 是 `O1` 的属性，则使用 `O1[K]`，否则使用 `never`。结果是一个联合类型，表示差异属性的类型。
*/
