type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}

/*
## 注释
  这个类型别名 `MyReadonly` 的作用是将对象类型 `T` 中的所有属性设置为只读（readonly）。它类似于 TypeScript 内置的 `Readonly` 类型。
### 类型参数
  - `T`: 一个对象类型，你希望将其属性设置为只读。
### 映射类型与关键字
  这个类型别名利用了 TypeScript 的映射类型和 `readonly` 修饰符来实现目标。
#### 分解映射类型 `{ readonly [K in keyof T]: T[K] }`
  1. `readonly`:
    - `readonly` 关键字用于将属性设置为只读。只读属性在初始化之后不能再被修改。
  2. `[K in keyof T]`:
    - 这是一个索引签名，用于遍历 `T` 类型的键（即属性名）。
    - `keyof T` 生成一个联合类型，包含 `T` 类型的所有键。
    - `K in keyof T` 意味着对于 `T` 中的每一个键 `K`，我们都将其包含在新类型中。
  3. `T[K]`:
    - 我们通过 `T[K]` 获取 `T` 类型中属性 `K` 的类型。
    - 这意味着新类型中的属性 `K` 将拥有与 `T` 中相同的类型，但是现在它们是只读的。
*/
