type MyOmit<T, K extends keyof any> = MyPick<T, Exclude<keyof T, K>>

/*
## 注释
### 类型参数
  - `T`:
    - 泛型参数 `T` 表示一个对象类型。

  - `K extends keyof any`:
    - `K` 表示需要从对象类型 `T` 中排除的键。
    - `keyof any` 实际上表示一个字符串类型或数字类型，用以确保 `K` 的类型是符合键的类型。

### 工具类型解释
#### `Exclude`
  `Exclude` 是 TypeScript 提供的内置工具类型，用于从联合类型中排除某些类型。
  ```typescript
  type Exclude<T, U> = T extends U ? never : T;
  ```
  在 `MyOmit` 中，`Exclude<keyof T, K>` 的作用是从 `T` 的所有键 (`keyof T`) 中排除 `K` 指定的键。

#### `MyPick`
  假设 `MyPick` 是类似于 TypeScript 内置工具类型 `Pick`。`Pick` 用于从对象类型中选择某些键，并生成一个新的对象类型。
  ```typescript
  type Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };
  ```
  在 `MyOmit` 中，`MyPick<T, Exclude<keyof T, K>>` 的作用是从对象类型 `T` 中选择那些没有被排除的键，构建一个新的对象类型。

### 组合解释
  通过 `MyOmit` 的定义，可以看到它是结合 `MyPick` 和 `Exclude` 来实现的：
  1. `Exclude<keyof T, K>`:
    - 从对象类型 `T` 的所有键中排除 `K` 指定的键，得到剩下的键。

  2. `MyPick<T, Exclude<keyof T, K>>`:
    - 使用 `MyPick` 从 `T` 中选择剩下的键，构建一个新的对象类型。
*/
