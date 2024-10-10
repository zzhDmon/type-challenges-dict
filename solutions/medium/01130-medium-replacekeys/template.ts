type ReplaceKeys<U, T, Y> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K]
}

/*
## 注释
  1. **遍历类型 `U` 的键**
    - 我们使用映射类型 `[K in keyof U]` 来遍历联合类型 `U` 的每个键。
  2. **检查键是否在 `T` 中**
    - 使用条件类型 `K extends T` 来检查当前键是否在需要被替换的键集合 `T` 中。
  3. **替换键的类型**
    - 如果键在 `T` 中：
      - 检查该键是否在 `Y` 中存在相应的新类型（`K extends keyof Y`）。
      - 如果存在对应的新类型，则使用 `Y[K]` 作为新的类型。
      - 如果不存在对应的新类型，则将其类型设置为 `never`。
    - 如果键不在 `T` 中，则保持原来的类型 `U[K]` 不变。
*/
