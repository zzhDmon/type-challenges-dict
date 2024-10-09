type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  [P in T[number]]: P
}

/*
## 注释
  这个类型别名 `TupleToObject` 用于将一个包含字符串、数字或符号的元组转换成对象类型，元组中的每个元素将成为对象中的键和值。

### 类型参数
  - `T extends readonly (string | number | symbol)[]`:
  - 这是一个泛型参数 `T`，表示一个只读数组（元组），其中的元素类型可以是字符串、数字或符号。这确保了 `T` 中的元素可以有效地用作对象的键。

### 映射类型与索引类型
  这个类型别名利用了 TypeScript 的映射类型和索引类型来实现目标。

#### 关键点
  1. `[P in T[number]]`:
    - `T[number]` 是 TypeScript 中的一种语法，用于获取元组 `T` 中所有元素的联合类型。
      - 举例来说，如果 `T` 是 `['a', 'b', 'c']`，那么 `T[number]` 就是 `'a' | 'b' | 'c'`。
    - `[P in T[number]]` 是一个遍历联合类型的映射类型。对于 `T` 中的每一个元素 `P`，我们都将其作为对象的键。
  2. `{ [P in T[number]]: P }`:
    - 对象的键和值都为 `P`，即元组中的每一个元素既是新对象中的键，也是该键对应的值。

*/
