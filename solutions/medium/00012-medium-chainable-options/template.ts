// type Chainable = {
//   option(key: string, value: any): any
//   get(): any
// }

// TODO: issue上的 测试用例不通过
// type Chainable<T = { }> = {
//   option: <K extends string, V>(key: K extends keyof T ?
//     V extends T[K] ? never : K
//     : K, value: V) => Chainable<Omit<T, K> & Record<K, V>>
//   get: () => T
// }

type Chainable<T = {}> = {
  option: <K extends string, V>(key: K, value: V) => Chainable<Omit<T, K> & Record<K, V>>
  get: () => T
}

/*
## 注释
### 类型参数
  - `T = {}`：泛型参数 `T` 表示当前的配置对象，默认为空对象 `{}`。随着链式调用的进行，`T` 会逐渐累积更多的键值对。

### 类型成员
#### option
  ```typescript
  option: <K extends string, V>(key: K, value: V) => Chainable<Omit<T, K> & Record<K, V>>
  ```
  这个方法是 `Chainable` 类型的核心，用于添加新的配置选项。它是一个泛型方法，具有两个泛型参数 `K` 和 `V`：
  - `<K extends string>`：`K` 表示配置选项的名称，它必须是字符串类型。
  - `<V>`：`V` 表示配置选项的值，可以是任意类型。
  方法签名解释：
  - `(key: K, value: V)`：方法接受两个参数，一个是键 `key`，另一个是值 `value`。
  - `=> Chainable<Omit<T, K> & Record<K, V>>`：方法返回一个新的 `Chainable` 对象，其中新的配置对象类型为 `Omit<T, K> & Record<K, V>`。

##### 这里用到了两个工具类型：
  1. **`Omit<T, K>`**：
    - 从对象类型 `T` 中移除键 `K`，确保新添加的键不会与已存在的键冲突（例如，更新已有的键值）。
  2. **`Record<K, V>`**：
    - 创建一个包含键 `K` 和对应值类型 `V` 的对象类型。
  通过交叉类型 `&` 将 `Omit<T, K>` 和 `Record<K, V>` 合并，得到的新对象类型包含了所有原有的键值对以及新添加的键值对。

#### get
  ```typescript
  get: () => T
  ```
  这个方法用于返回当前的配置对象：
  - `() => T`：方法不接受任何参数，返回当前的配置对象 `T`。
*/
