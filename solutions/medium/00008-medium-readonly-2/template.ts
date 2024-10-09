type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> &
  Readonly<Pick<T, K>>

/*
## 注释
### 类型参数
  - `T`:
    - 泛型参数 `T` 表示一个对象类型。
  - `K extends keyof T = keyof T`:
    - `K` 表示需要变为只读的键，它必须是 `T` 的键之一。
    - `= keyof T` 为 `K` 提供了一个默认值，即 `T` 的所有键。如果 `K` 未显式指定，那么默认情况下，`K` 就是 `T` 的所有键。

### 工具类型解释
#### `Omit`
  `Omit` 是 TypeScript 提供的内置工具类型，用于从对象类型中排除某些键，并生成一个新的对象类型。
  ```typescript
  type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
  ```
  在 `MyReadonly2` 中，`Omit<T, K>` 的作用是从对象类型 `T` 中排除 `K` 指定的键，得到剩下的部分。
  #### `Pick`
  `Pick` 是 TypeScript 提供的内置工具类型，用于从对象类型中选择某些键，并生成一个新的对象类型。
  ```typescript
  type Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };
  ```
  在 `MyReadonly2` 中，`Pick<T, K>` 的作用是从对象类型 `T` 中选择 `K` 指定的键，构建一个新的对象类型。

#### `Readonly`
  `Readonly` 是 TypeScript 提供的内置工具类型，用于将对象类型的所有属性设为只读。
  ```typescript
  type Readonly<T> = {
      readonly [P in keyof T]: T[P];
  };
  ```
  在 `MyReadonly2` 中，`Readonly<Pick<T, K>>` 的作用是将 `K` 指定的键设为只读。

### 组合解释
  通过 `MyReadonly2` 的定义，可以看到它是结合 `Omit`、`Pick` 和 `Readonly` 来实现的：
  1. `Omit<T, K>`:
    - 从对象类型 `T` 中排除 `K` 指定的键，得到剩余部分的类型。
  2. `Readonly<Pick<T, K>>`:
    - 从对象类型 `T` 中选择 `K` 指定的键，并将这些键设为只读。
  3. `Omit<T, K> & Readonly<Pick<T, K>>`:
    - 将排除 `K` 指定的键后的类型与将 `K` 指定的键设为只读后的类型进行交叉（组合），生成最终的类型。
*/
