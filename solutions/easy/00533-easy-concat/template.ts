type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U]

/*
## 注释
### 类型参数
  - `T extends readonly any[]`:
  - 这是泛型参数 `T`，必须是一个只读数组类型。`readonly` 表示该数组不可变。
  - 数组中的元素可以是任何类型（即 `any[]`）。
  - `U extends readonly any[]`:
  - 这是泛型参数 `U`，也必须是一个只读数组类型，同样地，元素可以是任何类型。

### 展开运算符
  TypeScript 中的展开运算符（spread operator）`...` 可以用于在类型系统中将元组或数组类型展开为单个元素。通过使用展开运算符，我们能够将两个数组类型合并为一个新的数组类型。
*/
